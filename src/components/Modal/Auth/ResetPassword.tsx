import React, { useState } from 'react';
import { Button, Flex, Icon, Input, Text } from '@chakra-ui/react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { BsDot, BsEnvelopeFill } from 'react-icons/bs';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import { useSetRecoilState } from 'recoil';
import { FIREBASE_ERRORS } from '../../../firebase/errors';

// type ResetPasswordProps = {
//   toggleView: (view: ModalView) => void;
// };

const ResetPassword: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const errorMessage = () => {
    if (error) {
      return (
        FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS] ??
        'an error has occured'
      );
    }
  };
  const setViewToLogin = () => {
    setAuthModalState((prev) => ({
      ...prev,
      view: 'login',
    }));
  };
  const setViewToSignup = () => {
    setAuthModalState((prev) => ({
      ...prev,
      view: 'signup',
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await sendPasswordResetEmail(email);
    setSuccess(true);
  };
  return (
    <Flex direction="column" alignItems="center" width="100%">
      <Icon as={BsEnvelopeFill} color="brand.100" fontSize={40} mb={2} />
      <Text fontWeight={700} mb={2}>
        Reset your password
      </Text>
      {success ? (
        <Text mb={4} textAlign="center">
          If that email exists, the reset password email has been sent!
        </Text>
      ) : (
        <>
          <Text fontSize="sm" textAlign="center" mb={2}>
            Enter the email associated with your account and we will send you a
            reset link
          </Text>
          <form onSubmit={onSubmit} style={{ width: '100%' }}>
            <Input
              name="email"
              placeholder="email"
              type="email"
              autoComplete="username"
              mb={2}
              onChange={(event) => setEmail(event.target.value)}
              isRequired
              _hover={{
                border: 'solid 1px',
                borderColor: 'brand.300',
              }}
              _focus={{
                border: 'solid 1px',
                borderColor: 'brand.400',
              }}
            />
            <Text
              align="center"
              fontSize="9px"
              color="red.400"
              fontWeight={700}
            >
              {errorMessage()}
            </Text>
            <Button
              width="100%"
              height="36px"
              mb={2}
              mt={2}
              type="submit"
              isLoading={sending}
            >
              Reset Password
            </Button>
          </form>
        </>
      )}
      <Flex
        alignItems="center"
        fontSize="9pt"
        color="blue.500"
        fontWeight={700}
        cursor="pointer"
      >
        <Text onClick={setViewToLogin}>LOGIN</Text>
        <Icon as={BsDot} />
        <Text onClick={setViewToSignup}>SIGN UP</Text>
      </Flex>
    </Flex>
  );
};
export default ResetPassword;
