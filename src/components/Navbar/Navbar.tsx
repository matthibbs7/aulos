import { Flex, Icon, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import LoginButton from '../Buttons/LoginButton';
import { GoMarkGithub } from "react-icons/go";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import LogoutButton from '../Buttons/LogoutButton';

const Navbar:React.FC = () => {
    const router = useRouter()

    return (
        <>
            <Flex style={{ background: 'white'}} height="42px" padding="0px 20px">
                <Flex>
                    {/* <Image src="/images/watchlogo.png" height="60px" alignSelf='center'/> */}
                    <Text alignSelf="center" onClick={() => {router.push('/')}} _hover={{cursor: "pointer"}} color="#001220" fontSize="22pt"  fontWeight="900" mt={3} ml={5}>Aulos.io</Text>
                    <Icon onClick={() => {window.location.assign('https://github.com/matthibbs7/aulos')} } _hover={{cursor: "pointer"}} color="black" mt={3} ml={2} fontSize="18pt" alignSelf="center" as={GoMarkGithub} />
                </Flex>
                <Flex alignSelf="center" marginLeft="auto" width="230px" mt={2} border="0px solid black" borderRadius="10px">
                    <LoginButton />
                </Flex>
                
                
            </Flex>
        </>
    )
}
export default Navbar;