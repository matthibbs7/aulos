import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';

const LogoutButton:React.FC = () => {
    const [user, loading, error] = useAuthState(auth)
    
    
    return (
        <Menu>
            <MenuButton ml={2} _focus={{outline: 'none'}} color="black" bg="brand.400" borderRadius="10px" height="35px" as={Button} rightIcon={<ChevronDownIcon />}>
               {`Welcome ${user?.displayName || user?.email?.split('@')[0]}`}
            </MenuButton>
            <MenuList borderRadius="10px" >
                <MenuItem onClick={() => signOut(auth)}>Logout</MenuItem>
            </MenuList>
        </Menu>
    )
}
export default LogoutButton;