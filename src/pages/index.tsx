import { background, Flex, Text, Image, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Twemoji from 'react-twemoji';

// represents index route/home page

const Home: NextPage = () => {
  const router = useRouter()

  const toClassify = () => {
    router.push('/classify')
  }

  return (
    <>
    
    <Flex width="100%" mb={5}>
      <Flex width="100%" justifyContent='center' mt={58} alignItems="center">
        <Twemoji options={{ className: 'twemoji' }}>
          <p style={{ justifyContent: 'center', display: 'inline-block', width: 'auto', height: '1em', verticalAlign: "50px"}}>👋</p>
        </Twemoji>
        <Text color="white" ml={5} justifyContent='center' fontSize="38pt" fontWeight={900}>Welcome to</Text><Text ml={3} justifyContent='center'  fontSize="38pt" color="white" fontWeight={900}> Aulos.io</Text>
      </Flex>
      
    </Flex>
    <Image margin="auto" justifySelf="center" style={{justifyContent: 'center', alignSelf: 'center'}} src="/images/aulosdemo.png" height="200px" borderRadius="30px" justifyContent="center"/>
    <Flex  justifyContent="center" padding="6px 0px" width="60%" margin="auto" maxWidth="700px">
      <Text mt={5} color="white" fontSize="18pt">The purpose of Aulos is to help a person identify what watch brand a watch is from a picture. Users will also be able to use an estimator for how much the watch is worth (although the accuracy of this method does vary).</Text>
      
    </Flex>
    
    <Flex justifyContent="center">
      <Button mt={7} onClick={toClassify} fontWeight={900} fontSize="15pt" height="70px" width="250px"color="white" bg="linear-gradient(to right, #b993d6, #8ca6db)">Classify my Watch!</Button>
    </Flex>
    </>
  )
}

export default Home
