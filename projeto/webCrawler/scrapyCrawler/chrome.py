from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.headless = True
options.add_argument("--window-size=1920,1200")

driver = webdriver.Chrome(options=options, executable_path=r'C:/Users/Pedro Pecora/Desktop/chromedriver')
driver.get("https://www.nintendo.com/")
driver.save_screenshot('screenshot.png')
driver.quit()