import sys
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from subprocess import call


# launch node

if len(sys.argv) > 1:
   if sys.argv[1] == "record":
       url = "https://localhost:61417"
       call(["node", "src/todobackend_compatibility_test.ts", "record"])
   elif sys.argv[1] == "playback":
       url = "https://localhost:61417"
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
    element = WebDriverWait(driver, 20).until(
        EC.text_to_be_present_in_element((By.CLASS_NAME, "passes"), "16")
    )
    print("all passed")
    driver.quit()
except TimeoutException as ex:
    print("didnae finish with 16 passes")
finally:
    print("compatibility ends")


#driver.quit()