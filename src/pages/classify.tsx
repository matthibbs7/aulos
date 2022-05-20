import { background, Flex, Text, Image, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React, { useState } from 'react';
import Twemoji from 'react-twemoji';
import ImageUpload from '../components/ImageUpload/ImageUpload';

// represents index route/home page

const classify: NextPage = () => {

  const [selectedFile, setSelectedFile] = useState<string>();

  const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()

    if (event.target.files?.[0]) {
      reader.readAsDataURL(event.target.files[0])
    } 
    reader.onload = (readerEvent) => {
      if (readerEvent.target?.result) {
        setSelectedFile(readerEvent.target.result as string)
      }
    }

  }

  return (
    <>
    
    <Flex width="100%" mb={5}>
      <Flex width="100%" justifyContent='center' mt={58} alignItems="center">
        <Twemoji options={{ className: 'twemoji' }}>
          <p style={{ justifyContent: 'center', display: 'inline-block', width: 'auto', height: '1em', verticalAlign: "50px"}}>🔎</p>
        </Twemoji>
        <Text color="white" ml={5} justifyContent='center' fontSize="30pt" fontWeight={900}>Classify your</Text><Text ml={3} justifyContent='center' fontSize="30pt" color="white" fontWeight={900}> Watch</Text>
      </Flex>
      
    </Flex>
    <ImageUpload selectedFile={selectedFile} onSelectImage={onSelectImage} setSelectedFile={setSelectedFile} />
    <Flex justifyContent="center" padding="6px 0px" width="60%" margin="auto">
      <Text color="white" fontSize="18pt">Click the button above to upload an image of a watch so you can identify the brand</Text>
      
    </Flex>
    <Flex justifyContent="center" padding="6px 0px" width="60%" margin="auto">
      <Text color="white" fontSize="18pt">This website uses what is called a Machine Learning Image Classification model that is trained on popular watch brands to give the probabilites that a given image is of a certain watch brand. Price estimation works by using a Regression Model.</Text>
      
    </Flex>
    
    </>
  )
}

export default classify
