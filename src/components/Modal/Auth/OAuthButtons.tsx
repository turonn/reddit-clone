import { Flex, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import {
  useSignInWithGoogle,
  useSignInWithMicrosoft,
} from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';
import { FIREBASE_ERRORS } from '../../../firebase/errors';

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // const [signInWithMicrosoft, microsoftUser, microsoftLoading, microsoftError] =
  //   useSignInWithMicrosoft(auth);

  const errorMessage = () => {
    if(googleError) {
      return FIREBASE_ERRORS[googleError?.message as keyof typeof FIREBASE_ERRORS] ?? 'an error has occured with Google login';
    }
    // if(microsoftError) {
    //   return FIREBASE_ERRORS[microsoftError?.message as keyof typeof FIREBASE_ERRORS] ?? 'an error has occured with Microsoft login';
    // }
  }
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        fontSize="14px"
        variant="oauth"
        mb={2}
        isLoading={googleLoading}
        onClick={() => signInWithGoogle()}
      >
        <Image
          src="images/googlelogo.png"
          height="20px"
          alt="Google Logo"
          mr={4}
        />
        Continue with Google
      </Button>
      {/* <Button
        fontSize="14px"
        variant="oauth"
        isLoading={microsoftLoading}
        onClick={() => signInWithMicrosoft()}
      >
        <Image
          src="images/microsoftlogo.png"
          height="20px"
          alt="Microsoft Logo"
          mr={4}
        />
        Continue with Microsoft
      </Button> */}
      <Text align="center" fontSize="9px" color="red.400" fontWeight={700}>
        {errorMessage()}
      </Text>
    </Flex>
  );
};
export default OAuthButtons;
