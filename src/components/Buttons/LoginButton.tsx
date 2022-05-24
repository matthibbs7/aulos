import React, { useEffect, useState } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Text
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../atoms/authModalAtom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { signOut } from 'firebase/auth';
import Router from "next/router";

const LoginButton:React.FC = () => {
    
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    
    const [user, loading] = useAuthState(auth)
    
    const setAuthModalState = useSetRecoilState(authModalState)


    return (
        <>
            {isClient ? 
            
            <>{user ? 
                <Menu>
                    <MenuButton _focus={{outline: 'none'}} color="black" bg="brand.400" borderRadius="10px" height="35px" as={Button} rightIcon={<ChevronDownIcon />}>
                        {`Welcome ${user?.displayName || user?.email?.split('@')[0]}`}
                    </MenuButton>
                    <MenuList borderRadius="10px" >
                        <MenuItem onClick={() => {signOut(auth); Router.push('/')}}>Logout</MenuItem>
                    </MenuList>
                </Menu>
                :
                <Menu  >
                    <MenuButton _focus={{outline: 'none'}} color="black" bg="brand.400" borderRadius="10px" height="35px" as={Button} rightIcon={<ChevronDownIcon />} >
                        Please log in to continue
                    </MenuButton>
                    <MenuList borderRadius="10px" >
                        <MenuItem onClick={() => {setAuthModalState({ open: true, view: 'login' })}}>Login</MenuItem>
                        <MenuItem onClick={() => setAuthModalState({ open: true, view: 'signup' })}>Create Account</MenuItem>
                        
                    </MenuList>
                </Menu>
                }</>

            :

            <Text>Loading ...</Text>
            
            }
            
        </>
    )
}
export default LoginButton;