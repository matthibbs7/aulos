# Aulos

![Imgur Image](https://imgur.com/Q8FFsWG.png)

Aulos is a web application that can identify the brand of a person's wrist watch from an image
that users upload with **87%** accuracy.

* Uses an **Azure Custom Vision** model.
* Trained on 16 popular watch brands [Rolex, Omega, a Lange and Sohne, Audemars Piguet, Breitling, Cartier, Hublot, IWC,
Jaeger-LeCoultre, Longines, Panerai, Patek Philippe, Sinn, Tagheuer, Tudor, Zenith]
* The Model was trained on thousands of web-scraped images (~300 per brand) from chrono24 using **Selenium**
* The website featues login authentication with Firebase and offers **OAuth** with Google and Facebook accounts

## Built with

* [React](https://github.com/facebook/react)
* [TypeScript](https://github.com/microsoft/TypeScript)
* [Next.js](https://github.com/vercel/next.js/)
* [Firebase](https://github.com/firebase/)
* [ChakraUI](https://github.com/chakra-ui/chakra-ui)
* [Recoil](https://github.com/facebookexperimental/Recoil)
* [TensorFlowJS](https://github.com/tensorflow/tfjs)


## How It Works

![Imgur Image](https://imgur.com/cEnEN7K.png)

1. Home page where uers are greeted with a button to 'Classify my watch'. Upon clicking the button, an authentication modal is triggered where they are prompted to either log in or create an account to proceed with image classification tasks.
   
<img src="https://imgur.com/xC6ZLTx.png" width="740" height="700">
   
2. The modal features OAuth for Google and Facebook accounts and supports regular email/password logins as well.
   
 <img src="https://imgur.com/pThq7wd.png" width="700" height="500">
   
3. Once users are logged in, the Next router will push them to the /Classify page where they are able to upload an image. The image 'dropzone' allows uers to drag and drop files or click the upload button to prompt the file explorer to open.
   
 <img src="https://imgur.com/M3QCKhg.png" width="700" height="500">
4. Once an image is uploaded users press the 'predict' button and the website will load the premade Azure CV model using TensorFlowJS and predict the brand of the watch. Results are spliced to the top 3 and recentered out of the relative sum (the top 3 will add up to ~100%) and then presented to the user. Users can continue uploading new images of watches by pressing the 'New Classification' button.

* Another sample output with slightly less professional grade image:

<img src="https://imgur.com/czbUVNs.png" width="700" height="500">

## How Data was Collected

The dataset was collected using a Python script with the Selenium library. Under the DataScraping directory there are two Python scripts:
* **datascraper.py** - Iterates through 16 brands, for each navigates to chrono24.com and scrapes images for the first 5 pages of results for each brand. Stores the link of the image, price of the watch, and indexes accordingly into a .txt file.
* **img_downloader.py** - Opens each brands .txt file of the image links and downloads each image link.

## Live Production Site on Vercel

Since the web application was made using Next.js, there is a live production version on Vercel at  [aulos.vercel.app](https://aulos.vercel.app) from the creators of Next.js.

