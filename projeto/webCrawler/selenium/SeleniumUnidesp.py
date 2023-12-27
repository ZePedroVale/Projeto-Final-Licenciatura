import time
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException


f = open('teste2.txt', 'w', encoding = 'UTF-8')

driver = webdriver.Chrome(executable_path=ChromeDriverManager().install())

url = 'https://www.unidoscontraodesperdicio.pt/actualidade'


driver.get(url)


#MEXE NO GOOGLE JUNTO, SE NÃO DA RUIM!
for x in range(0, 6):
    time.sleep(3)
    try:
        WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.XPATH, '//div[@class="gallery-item-container visible hover-animation-fade-in"]')))
        print("All necessary tables have been loaded successfully")
        titles = driver.find_elements(by=By.XPATH, value='//div[@class="gallery-item-container visible hover-animation-fade-in"]')
        print(titles)
        time.sleep(3)
        for i in titles:
            title = i.find_element(by=By.XPATH, value='.//*[@class="Q4M-9"]').text
            if(title == ""):
                print('sem title')
                break
            print('title: ', title)
            text = i.find_element(by=By.XPATH, value='.//*[@class="Q4M-9"]').text
            print('text: ', text)
            href = i.find_element(by=By.XPATH, value='.//a[@class="_0Z7nH _1vXcx Ccfy1 OY1Eq has-custom-focus qJ72e"]')
            link = [href.get_attribute('href')]
            print('href: ', link)
            img = i.find_element(by=By.XPATH, value='.//*[@data-hook="gallery-item-image-img"]')
            img_link = [img.get_attribute('src')]
            f.write('{')
            f.write('"title": ')
            f.write('"' + title + '",')
            f.write('"text": ')
            f.write('"' + text + '",')
            f.write('"href": ')
            f.write('"' + str(link[0]) + '",')
            f.write('"img": ')
            f.write('"' + str(img_link[0]) + '",' + '}')
            f.write('\n')
            print('img: ', img_link)        
    except TimeoutException:
        raise("Timeout error")
    f.write('\n')
    print('\n')
    print('---------------"NEXT PAGE"---------------')
    print('\n')
    butao = driver.find_element(by=By.XPATH, value='//*[@data-hook="pagination__next"]').click()
    time.sleep(3)

f.close()