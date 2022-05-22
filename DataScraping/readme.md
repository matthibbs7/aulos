# This directory contains 2 Python scripts for grabbing images of various watch brands
### datascraper.py
- Uses Selenium to grab url links and price of watch images from chrono24.com
- Stores a list of links in a .txt file for each watch brand (ie: rolex.txt holds 100's of image links) and appends the price on the end of each line
### img_downloader.py
- Reads each text file from datascraper (ie: rolex.txt) and sequentially downloads each image
- Saves each image with the following format: [BRAND NAME]-[UNIQUE INDEX]-[WATCH PRICE].jpg

Both files are highly customizable -- It is easy to select which brands to scrape and ~how many images
