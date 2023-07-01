import browser as b
import time
import os

def main():
    browser = os.environ.get('BROWSER')

    b.openBrowser(browser)
    b.goUp()
    b.goUp()

if __name__ == "__main__":
    main()
