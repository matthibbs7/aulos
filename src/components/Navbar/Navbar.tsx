import { Flex, Icon, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import LoginButton from '../Buttons/LoginButton';
import { GoMarkGithub } from "react-icons/go";

const Navbar:React.FC = () => {
    const router = useRouter()
    return (
        <>
            <Flex style={{ background: '#556270' }} height="70px" padding="6px 12px">
                <Flex>
                    <Image src="/images/logo2.png" height="60px" alignSelf='center'/>
                    <Text onClick={() => {router.push('/')}} _hover={{cursor: "pointer"}} color="white" fontSize="26pt" fontWeight="700">Aulos.io</Text>
                </Flex>
                <Icon onClick={() => {window.location.assign('https://github.com/matthibbs7/aulos')} } _hover={{cursor: "pointer"}} mr={4} marginLeft="auto" color="white" fontSize="22pt" alignSelf="center" as={GoMarkGithub} />
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