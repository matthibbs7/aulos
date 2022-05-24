import { background, Flex, Text, Image, Button, Divider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Router from "next/router";
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Twemoji from 'react-twemoji';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../atoms/authModalAtom';
import AuthModal from '../components/Modal/Auth/AuthModal';
import { auth } from '../firebase/clientApp';

// represents index route/home page

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(auth)
  const setAuthModalState = useSetRecoilState(authModalState)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    setAuthModalState({open: false, view: 'login'})
    if (clicked) {
      Router.push('classify')
    }
  }, [user])

  const toClassify = () => {
    setClicked(true)
    if (!user) {
      setAuthModalState({open: true, view: 'login'})
    } else {
      Router.push('classify')
    }
  }

  return (
    <>
    <div style={{aspectRatio: '700/50', width: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: "url('/images/waves4.svg')"}}></div>
    <Flex backgroundBlendMode="color-burn" width="80%" maxWidth="740px" justifyContent="center" margin="auto" flexDirection="column" bg="white" borderRadius="20px" padding="30px" marginTop="80px" border="3px solid" borderColor="#715df1">
      <Flex width="100%" mb={5}>
        <Flex width="100%" justifyContent='center' alignItems="center" flexDirection="row">
          <Twemoji options={{ className: 'twemoji' }}>
            <p style={{ justifyContent: 'center', display: 'inline-block', width: 'auto', height: '1em', verticalAlign: "50px"}}>👋</p>
          </Twemoji>
          <Text textAlign="center" mr={10} color="black" ml={5} justifyContent='center' style={{fontSize: 'min(38pt, 8vw)'}} fontWeight={900} >Welcome to Aulos.io</Text>
        </Flex>
        
      </Flex>
      {/* <Image margin="auto" justifySelf="center" style={{justifyContent: 'center', alignSelf: 'center'}} src="/images/watch.svg" height="200px" borderRadius="30px" justifyContent="center"/> */}
      <Flex  justifyContent="center" padding="6px 0px" width="70%" margin="auto" maxWidth="700px">
        <Text mt={5} color="black" fontSize="16pt" textAlign="center">The purpose of Aulos is to help a person identify what
         
        watch brand a watch is from a picture. This website uses a Microsoft Azure Custom Vision model trained on popular watch brands.</Text>
        
      </Flex>
      
      <Flex justifyContent="center" margin="auto" flexDirection="column">
        {clicked && <Text color="red" fontWeight={700} textAlign="center" mb={-3}>Waiting for login...</Text>}
        <Button  isLoading={clicked} mt={7} onClick={toClassify} fontWeight={900} fontSize="15pt" height="70px" width="250px"color="white" bg="linear-gradient(to right, #b993d6, #8ca6db)" _hover={{bg: "linear-gradient(to right, #b993e5, #dfa6db)"}}>Classify my Watch!</Button>
        <AuthModal />
      </Flex>
    </Flex>
    </>
  )
}

export default Home
