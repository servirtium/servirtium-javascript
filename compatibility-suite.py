import sys
import os
import signal
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
import subprocess
import time

node_process = None

if len(sys.argv) > 1:
   if sys.argv[1] == "record":
       # TODO check that node process is already started.
       url = "http://localhost:61417"
       node_process = subprocess.Popen(["node", "src/todobackend_compatibility_test.js", "record"])
   elif sys.argv[1] == "playback":
       url = "http://localhost:61417"
       node_process = subprocess.Popen(["node", "src/todobackend_compatibility_test.js", "playback"])
   elif sys.argv[1] == "direct":
       print("showing reference Sinatra app online without Servirtium in the middle")
       url = "https://todo-backend-sinatra.herokuapp.com"
   else:
       print("Second arg should be record or playback")
       exit(10)
else:
   print("record/playback/direct argument needed")
   exit(10)

driver = webdriver.Chrome("/usr/local/bin/chromedriver")

# time.sleep(5)

driver.get("https://www.todobackend.com/specs/index.html?" + url + "/todos")
try:
    element = WebDriverWait(driver, 300).until(
        EC.text_to_be_present_in_element((By.CLASS_NAME, "passes"), "16")
    )
    print("Compatibility suite: all 16 tests passed")

    if sys.argv[1] == "record":

        print("generate replacements script")
        with open("./compatibility_suite_mock_replacements.sh", "w") as myfile:
            myfile.write("cat mocks/todobackend_test_suite.md | sed 's#https:\/\/todo-backend-sinatra\.herokuapp\.com#http://localhost:61417#g' | sed 's#todo-backend-sinatra\.herokuapp\.com#localhost:61417#g' | sed 's#user-agent: .*#user-agent: Servirtium-Testing#' | sed '/^via: /d' | sed '/^server: /d' | ")
        process = subprocess.Popen(["bash", "./compatibility_suite_make_mock_replacements.sh"], stdout=subprocess.PIPE)
        output, error = process.communicate()
        with open("./compatibility_suite_mock_replacements.sh", "a") as myfile:
            myfile.write(" cat > mocks/todobackend_test_suite_with_replacements.md")

        print("execute replacements script")
        process = subprocess.Popen(["bash", "./compatibility_suite_mock_replacements.sh"], stdout=subprocess.PIPE)
        output, error = process.communicate()

except TimeoutException as ex:
    print("Compatibility suite: did not finish with 16 passes. See open browser frame.")

# TODO warn that node process was not started.

print("mode: " + sys.argv[1])

# if sys.argv[1] == "record":
    # print("Renaming markdown recording...")
    # TODO Can't get new md file to overwrite the old :-( :-( :-(
    #      Not using os.rename() or shutils.move()
    # process = subprocess.Popen("mv mocks/todobackend_test_suite_with_replacements.md mocks/todobackend_test_suite.md".split(), stdout=subprocess.PIPE)
    # output, error = process.communicate()
    # print(".. Renamed markdown recording.")

if node_process is not None:
    print("Killing Node")
    os.killpg(os.getpgid(node_process.pid), signal.SIGTERM)
    node_process.kill()

print("Closing Selenium")
driver.quit()
print("All done.")
