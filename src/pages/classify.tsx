import { background, Flex, Text, Image, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Twemoji from 'react-twemoji';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../atoms/authModalAtom';
import ImageUpload from '../components/ImageUpload/ImageUpload';
import AuthModal from '../components/Modal/Auth/AuthModal';
import { auth } from '../firebase/clientApp';

// represents index route/home page

const classify: NextPage = () => {
  const [user] = useAuthState(auth)

  const [selectedFile, setSelectedFile] = useState<string>();

  useEffect(() => {
    if (!user) {
      Router.push('/')
    }
  }, [])

  const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
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
    <div style={{aspectRatio: '700/50', width: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: "url('/images/waves4.svg')"}}></div>
    <Flex width="100%" mb={5} >
      <Flex width="100%" justifyContent='center' mt={58} alignItems="center">
        <Twemoji options={{ className: 'twemoji' }}>
          <p style={{ justifyContent: 'center', display: 'inline-block', width: 'auto', height: '1em', verticalAlign: "50px"}}>🔎</p>
        </Twemoji>
        <Text color="white" ml={5} justifyContent='center' fontSize="30pt" fontWeight={900}>Classify your</Text><Text ml={3} justifyContent='center' fontSize="30pt" color="white" fontWeight={900}> Watch</Text>
      </Flex>
      <AuthModal />
    </Flex>
    <ImageUpload selectedFile={selectedFile} onSelectImage={onSelectImage} setSelectedFile={setSelectedFile} />
    
    
    
    </>
  )
}

export default classify
