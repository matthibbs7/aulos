import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';


const AuthModal:React.FC = () => {
    // Use auth modal atom
    const [modalState, setModalState] = useRecoilState(authModalState)
    const [user, loading, error] = useAuthState(auth)


    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }))
    }

    useEffect(() => {
        if (user) handleClose();
    }, [user])

    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">
                        {modalState.view === 'login' && 'Login'}
                        {modalState.view === 'signup' && 'Sign Up'}
                        {modalState.view === 'resetPassword' && 'Reset Password'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Flex direction="column" align="center" justify="center" width="70%">
                            <OAuthButtons />
                            <Text color="gray.500" fontWeight={700}>OR</Text>
                            <AuthInputs />
                            {/* <ResetPassword /> */}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default AuthModal;