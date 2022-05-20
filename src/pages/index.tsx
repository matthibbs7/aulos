import { background, Flex, Text, Image, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Twemoji from 'react-twemoji';

// represents index route/home page

const Home: NextPage = () => {
  return (
    <>
    
    <Flex width="100%" mb={5}>
      <Flex width="100%" justifyContent='center' mt={58} alignItems="center">
        <Twemoji options={{ className: 'twemoji' }}>
          <p style={{ justifyContent: 'center', display: 'inline-block', width: 'auto', height: '1em', verticalAlign: "50px"}}>👋</p>
        </Twemoji>
        <Text color="white" ml={5} justifyContent='center' fontSize="30pt" fontWeight={900}>Welcome to</Text><Text ml={3} justifyContent='center' fontSize="30pt" color="white" fontWeight={900}> Aulos.io</Text>
      </Flex>
      
    </Flex>
    {/* <Image marginTop={50} margin="auto" justifySelf="center" style={{justifyContent: 'center', alignSelf: 'center'}} src="/images/watch.svg" height="200px" borderRadius="35px" justifyContent="center"/> */}
    <Flex justifyContent="center" padding="6px 0px" width="80%" margin="auto">
      <Text color="white" fontSize="18pt">The purpose of Aulos is to help a person identify what watch brand a watch is from a picture. Users will also be able to use an estimator for how much the watch is worth (although the accuracy of this method does vary).</Text>
      
    </Flex>
    <Flex justifyContent="center" padding="6px 0px" width="80%" margin="auto">
      <Text color="white" fontSize="18pt">This website uses what is called a Machine Learning Image Classification model that is trained on popular watch brands to give the probabilites that a given image is of a certain watch brand. Price estimation works by using a Regression Model.</Text>
      
    </Flex>
    <Flex justifyContent="center">
      <Button fontWeight={900} fontSize="15pt" height="70px" width="250px"color="white" bg="linear-gradient(to right, #b993d6, #8ca6db)">Classify my Watch!</Button>
    </Flex>
    </>
  )
}

export default Home
