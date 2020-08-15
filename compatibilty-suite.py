import sys
from selenium import webdriver
driver = webdriver.Chrome("/usr/local/bin/chromedriver")

if len(sys.argv) > 1 and sys.argv[1] == "test":
    url = sys.argv[1]
else:
    print("showing reference sinatra app online without Servitium in the middle")
    url = "https://todo-backend-sinatra.herokuapp.com/todos"

driver.get("https://www.todobackend.com/specs/index.html?" + url)
#driver.quit()