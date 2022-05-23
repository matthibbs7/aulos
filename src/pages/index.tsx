import { background, Flex, Text, Image, Button, Divider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Twemoji from 'react-twemoji';
import AuthModal from '../components/Modal/Auth/AuthModal';

// represents index route/home page

const Home: NextPage = () => {
  const router = useRouter()

  const toClassify = () => {
    router.push('/classify')
  }

  return (
    <>
    <div style={{aspectRatio: '700/50', width: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: "url('/images/waves4.svg')"}}></div>
    <Flex backgroundBlendMode="color-burn" width="70%" justifyContent="center" margin="auto" flexDirection="column" bg="white" borderRadius="20px" padding="30px" marginTop="80px" border="1px dashed navy">
      <Flex width="100%" mb={5}>
        <Flex width="100%" justifyContent='center' alignItems="center">
          <Twemoji options={{ className: 'twemoji' }}>
            <p style={{ justifyContent: 'center', display: 'inline-block', width: 'auto', height: '1em', verticalAlign: "50px"}}>👋</p>
          </Twemoji>
          <Text color="black" ml={5} justifyContent='center' fontSize="38pt" fontWeight={900} >Welcome to</Text><Text ml={3} justifyContent='center'  fontSize="38pt" color="black" fontWeight={900} > Aulos.io</Text>
        </Flex>
        
      </Flex>
      {/* <Image margin="auto" justifySelf="center" style={{justifyContent: 'center', alignSelf: 'center'}} src="/images/watch.svg" height="200px" borderRadius="30px" justifyContent="center"/> */}
      <Flex  justifyContent="center" padding="6px 0px" width="70%" margin="auto" maxWidth="700px">
        <Text mt={5} color="black" fontSize="16pt" textAlign="center">The purpose of Aulos is to help a person identify what
         
        watch brand a watch is from a picture. This website uses a Microsoft Azure Custom Vision model trained on popular watch brands.</Text>
        
      </Flex>
      
      <Flex justifyContent="center">
        <Button mt={7} onClick={toClassify} fontWeight={900} fontSize="15pt" height="70px" width="250px"color="white" bg="linear-gradient(to right, #b993d6, #8ca6db)">Classify my Watch!</Button>
        <AuthModal />
      </Flex>
    </Flex>
    </>
  )
}

export default Home
