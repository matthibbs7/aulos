import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp'


const OAuthButtons:React.FC = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const [signInWithFacebook, userf, loadingf, errorf] = useSignInWithFacebook(auth)
    return (
        <Flex direction="column" width="100%" mb={4}>
            <Button mb={2} isLoading={loading} onClick={() => signInWithGoogle()}>
                <Image src="/images/googlelogo.png" height="20px" mr={4} />
                Continue with Google
            </Button>
            <Button mb={2} isLoading={loadingf} onClick={() => signInWithFacebook()}>
                <Image src="/images/facebook.png" height="20px" mr={4} />
                Continue with Facebook
            </Button>
            {(error || errorf) && <Text>{error?.message || errorf?.message}</Text>}
        </Flex>
    )
}
export default OAuthButtons;