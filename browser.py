import os
import time
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

ACTIONS = None
DRIVER = None

def openBrowser(browser):
    # Get the current directory
    current_directory = os.path.dirname(os.path.abspath(__file__))

    # Construct the file path for index.html
    file_path = os.path.join(current_directory, "bomberda/index.html")

    # Set up the Selenium WebDriver
    global DRIVER

    # Initialize the WebDriver based on the browser value
    if browser == 'chrome':
        DRIVER = webdriver.Chrome()
    elif browser == 'firefox':
        DRIVER = webdriver.Firefox()
    else:
        raise ValueError("Invalid browser specified in the BROWSER environment variable")
    
    DRIVER.get("file://" + file_path)

    # Wait for the page to load
    wait = WebDriverWait(DRIVER, 10)
    wait.until(EC.presence_of_element_located((By.TAG_NAME, "body")))

    # Create an instance of ActionChains
    global ACTIONS 
    ACTIONS = ActionChains(DRIVER)

def goUp():

    time.sleep(1)
    # Simulate pressing the up arrow key
    ACTIONS.send_keys(Keys.ARROW_UP).perform()

def goDown():

    time.sleep(1)
    # Simulate pressing the down arrow key
    ACTIONS.send_keys(Keys.ARROW_DOWN).perform()

def goRight():

    time.sleep(1)
    # Simulate pressing the right arrow key
    ACTIONS.send_keys(Keys.ARROW_RIGHT).perform()

def goLeft():

    time.sleep(1)
    # Simulate pressing the left arrow key
    ACTIONS.send_keys(Keys.ARROW_LEFT).perform()

def bomb():
    time.sleep(1)
    # Simulate pressing the space key
    ACTIONS.send_keys(Keys.SPACE).perform()

def reset():
    time.sleep(1)
    # Simulate pressing the r key
    ACTIONS.send_keys("r").perform()

def getMap():
    textArea = DRIVER.find_element("id", "customLevel") 
    return textArea.get_attribute("value")

def setMap(custom_map):
    textArea = DRIVER.find_element("id", "customLevel") 
    textArea.clear()
    textArea.send_keys(custom_map)
    canvas = DRIVER.find_element("id", "canvas")
    ACTIONS.move_to_element(canvas).click().perform()

def checkTriggerNextLevel():
    trigger_next_level = DRIVER.execute_script("return triggerNextLevel;")

    if trigger_next_level:
        DRIVER.execute_script("triggerNextLevel = false;")
        return True
    else:
        return False