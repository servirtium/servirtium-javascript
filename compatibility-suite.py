import sys
import os
import signal
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
import subprocess

node_process = None

if len(sys.argv) > 1:
   if sys.argv[1] == "record":
       # TODO check that node process is already started.
       # egrep -w '61417' /etc/services ...... something
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

driver.get("https://www.todobackend.com/specs/index.html?" + url + "/todos")
try:
    element = WebDriverWait(driver, 300).until(
        EC.text_to_be_present_in_element((By.CLASS_NAME, "passes"), "16")
    )
    print("Compatibility suite: all 16 tests passed")

    if sys.argv[1] == "record":
        with open("./compatibility_suite_mock_replacements.sh", "w") as myfile:
            myfile.write("cat mocks/todobackend_test_suite.md | ")
        process = subprocess.Popen(["bash", "./compatibility_suite_make_mock_replacements.sh"], stdout=subprocess.PIPE)
        output, error = process.communicate()
        with open("./compatibility_suite_mock_replacements.sh", "a") as myfile:
            myfile.write(" cat > mocks/todobackend_test_suite_with_replacements.md")
        process = subprocess.Popen(["bash", "./compatibility_suite_mock_replacements.sh"], stdout=subprocess.PIPE)
        output, error = process.communicate()
        # TODO rename todobackend_test_suite_with_replacements.md to todobackend_test_suite.md
        # but only once all the replacements are completed - Paul

except TimeoutException as ex:
    print("Compatibility suite: did not finish with 16 passes. See open browser frame.")
if node_process is not None:
    os.killpg(os.getpgid(node_process.pid), signal.SIGTERM)
    node_process.kill()
# TODO warn that node process was not started.
driver.quit()