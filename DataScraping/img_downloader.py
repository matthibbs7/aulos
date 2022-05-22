# -*- coding: utf-8 -*-
"""
Simple Python Script to download an img given a url,
and reformat the file name to include the price/index for ease
of use
"""

import pandas as pd
import csv
import os
import requests
from pathlib import Path
import shutil

PATH = "C:\\Users\\19522\\Desktop\\Aulos.io\\DataProcessing\\imgs\\"

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

for BRAND in BRANDS:
    with open(f"{BRAND}.txt") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            
            img_url = row[0]
            price = row[1]
            
            r = requests.get(img_url, stream=True)
            if r.status_code == 200:
                with open(f"{PATH}{BRAND}-{line_count}-{price}.jpg", 'wb') as f:
                    r.raw.decode_content = True
                    shutil.copyfileobj(r.raw, f)
            
            #print(f"IMAGE: {row[0]}, PRICE: {row[1]}")
            line_count += 1
            
        print(f"{line_count} lines processed for {BRAND}")
