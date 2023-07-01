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
