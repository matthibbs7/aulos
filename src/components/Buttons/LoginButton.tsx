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

const LoginButton:React.FC = () => {
    

    return (
        <Menu  >
            <MenuButton _focus={{outline: 'none'}} color="white" bg="brand.300" borderRadius="none" height="35px" as={Button} rightIcon={<ChevronDownIcon />}>
                User
            </MenuButton>
            <MenuList  >
                <MenuItem>Login</MenuItem>
                <MenuItem>Create Account</MenuItem>
                
            </MenuList>
        </Menu>
    )
}
export default LoginButton;