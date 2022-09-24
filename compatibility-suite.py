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
import docker

servirtium_process = None

# Pete Hodgson's original is at https://www.todobackend.com/specs/index.html
# Ours has a few additions to aid it's use in this compatibility suite
# Playback and Record mode use ours. Direct mode uses Pete's original.
todoSuiteUrl = "https://servirtium.github.io/compatibility-suite/index.html"


# We used to use the Ruby-Sinatra version of the Todobackend, but it is not
# up as often as the http4k version, but both are unavailable as Heroku changed
# their free model.
# realUrl = "https://todo-backend-sinatra.herokuapp.com"
# realUrl = "https://http4k-todo-backend.herokuapp.com"
# So se use our own version of http4k-todo-backend via Docker:
realUrl = "http://http4k-todo-backend.local.gd:54321"

dkrCtr = None

if len(sys.argv) > 1:

   try:
       if sys.argv[1] == "record" or sys.argv[1] == "direct":

           dkr = docker.from_env()
           dkrCtr = dkr.containers.run("todobackend-api-for-servirtium-development", ports={'8000/tcp': 54321}, detach=True)
   except BaseException as err:
       if "port is already allocated" in str(err):
           print("docker ps - then kill the todobackend-api-for-servirtium-development already running")
           exit(10)

   if sys.argv[1] == "record":
       # TODO check that node process is already started.
       url = "http://localhost:61417"
       servirtium_process = subprocess.Popen(["node", "src/todobackend_compatibility_test.js", "record", realUrl])
   elif sys.argv[1] == "playback":
       url = "http://localhost:61417"
       servirtium_process = subprocess.Popen(["node", "src/todobackend_compatibility_test.js", "playback", realUrl])
   elif sys.argv[1] == "direct":
       print("showing Http4k Todobackend implementation online without Servirtium in the middle")
       todoSuiteUrl = "http://www.todobackend.com/specs/index.html"
       url = realUrl
   else:
       print("Second arg should be record or playback")
       exit(10)
else:
   print("record/playback/direct argument needed")
   exit(10)

if len(sys.argv) > 2:
   if sys.argv[2] == "local":
       # Running via 'python -m SimpleHTTPServer 8000' in a different shell
       todoSuiteUrl = "http://localhost:8000/index.html"

driver = webdriver.Chrome("chromedriver")

print("sleep 5 seconds for older workstations")
time.sleep(5)

driver.get(todoSuiteUrl + "?" + url)
try:
    element = WebDriverWait(driver, 300).until(
        EC.text_to_be_present_in_element((By.CLASS_NAME, "passes"), "16")
    )
    print("Compatibility suite: all 16 tests passed")

except TimeoutException as ex:
    print("Compatibility suite: did not finish with 16 passes. See open browser frame.")

# TODO warn that node process was not started.

print("mode: " + sys.argv[1])

if servirtium_process is not None:
    print("Killing servirtium process")
    os.killpg(os.getpgid(servirtium_process.pid), signal.SIGTERM)
    servirtium_process.kill()

if dkrCtr is not None:
    print("Killing Locally launched Todo-backend")
    dkrCtr.stop()

print("Closing Selenium")
driver.quit()
print("All done.")
