import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import LoginButton from '../Buttons/LoginButton';


const Navbar:React.FC = () => {
    
    return (
        <>
            <Flex style={{ background: 'linear-gradient(to right, #556270, #ff6b6b)' }} height="70px" padding="6px 12px">
                <Flex>
                    {/*<Image src="/images/logo.png" height="60px" alignSelf='center'/>*/}
                    <Text color="white" fontSize="26pt" fontWeight="700">Aulos.io</Text>
                </Flex>
                <Text marginLeft='auto' color="white">Hamburger</Text>
            </Flex>
            <Flex bg="#292a2c" height="35px" padding="6px 12px">
                <Flex alignItems='center' marginLeft='auto'>
                    <LoginButton />
                </Flex>
            </Flex>
        </>
    )
}
export default Navbar;