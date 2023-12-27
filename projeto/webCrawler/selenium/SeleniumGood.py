import time
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json


f = open('teste5.JSON', 'w', encoding = 'UTF-8')

driver = webdriver.Chrome(executable_path=ChromeDriverManager().install())

url = 'https://toogoodtogo.pt/pt/blog?category_id=168'


driver.get(url)

butao = driver.find_element(by=By.XPATH, value='//button[@class="coi-banner__accept"]').click()

butao = driver.find_element(by=By.XPATH, value='//button[@class="btn btn-v2020 py-3 px-4 px-xl-5"]').click()



WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.XPATH, '//*[@class="blog-post-link"]')))
time.sleep(3)
titles = driver.find_elements(by=By.XPATH, value='//div[@class="blog-card-v2020 "]')
with open('good.json', 'w') as outfile:
    outfile.write('[')
    outfile.write('\n')
    for i in titles:
        href = i.find_element(by=By.XPATH, value='//*[@class="blog-post-link"]')
        link = href.get_attribute('href')
        print('href: ', link)
        img = i.find_element(by=By.XPATH, value='.//div[@class="blog-card-v2020-img"]')
        img_sty = img.get_attribute('lazy-bg')
        print(img_sty)
        title = i.find_element(by=By.XPATH, value='.//h5[@class="h5 h5-small mb-0"]').text
        print(title)
        data =  {
            'title' : title, 'href' : str(link),'img' : img_sty, 
            } 
        json_string = json.dumps(data)      
        outfile.write(json_string)
        outfile.write(',')
        outfile.write('\n')
    outfile.write(']')