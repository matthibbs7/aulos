# -*- coding: utf-8 -*-
"""
Webscraping Program using BeautifulSoup to retreive watch Image and Price data
from various different websites.

"""
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import requests
import pandas as pd
import time



BRANDS =["rolex", 
         "omega",
         "iwc",
         "breitling",
         "hublot",
         "panerai",
         "tagheuer",
         "cartier",
         "zenith",
         "patekphilippe",
         "audemarspiguet",
         "jaegerlecoultre",
         "alangesoehne",
         "tudor",
         "longines",
         "sinn"]


browser = webdriver.Chrome()

for BRAND in BRANDS:
    urls = [f"https://www.chrono24.com/{BRAND}/index.htm",
            f"https://www.chrono24.com/{BRAND}/index-2.htm",
            f"https://www.chrono24.com/{BRAND}/index-3.htm",
            f"https://www.chrono24.com/{BRAND}/index-4.htm",
            f"https://www.chrono24.com/{BRAND}/index-5.htm"]
    
    # Load page
    
    current_file = open(f"{BRAND}.txt", "a")
    
    for PAGE in urls:
        browser.get(PAGE)
        time.sleep(2)
        
        elem = browser.find_element_by_tag_name("body")
        
        no_of_pagedowns = 15
        
        while no_of_pagedowns:
            elem.send_keys(Keys.PAGE_DOWN)
            
            
            time.sleep(0.5)
            no_of_pagedowns-=1
            
        img_urls = [x.get_attribute("src") for x in elem.find_elements(By.CSS_SELECTOR, '.article-item .article-image-container img') if x.get_attribute("src") != ""]
        prices = [x.text.replace('$', '').replace(',', '') for x in elem.find_elements(By.CSS_SELECTOR, '.article-item-container .article-price strong') if x.text != ""]
        
        
        
        print(BRAND)
        print(f"{len(prices)} price data gathered and {len(img_urls)} img urls gathered\n")
        
        if (len(prices) != len(img_urls)):
            continue
        
        for i in range(len(prices)):
            if prices[i] == "Price on request":
                continue
            current_file.write(img_urls[i] + "," + prices[i] + "\n")
        
        print("\n")
        
    current_file.close()
        
        
        
        
    
        

#URL = "https://realpython.github.io/fake-jobs/"
#page = requests.get(URL)

#browser = webdriver.Chrome()


    

    
    



