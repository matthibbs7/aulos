import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../atoms/authModalAtom';

const LoginButton:React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState)

    return (
        <Menu  >
            <MenuButton _focus={{outline: 'none'}} color="black" bg="brand.400" borderRadius="10px" height="35px" as={Button} rightIcon={<ChevronDownIcon />} >
                Please log in to continue
            </MenuButton>
            <MenuList borderRadius="10px" >
                <MenuItem onClick={() => setAuthModalState({ open: true, view: 'login' })}>Login</MenuItem>
                <MenuItem onClick={() => setAuthModalState({ open: true, view: 'signup' })}>Create Account</MenuItem>
                
            </MenuList>
        </Menu>
    )
}
export default LoginButton;