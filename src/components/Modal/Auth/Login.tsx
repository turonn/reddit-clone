import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'
import { FIREBASE_ERRORS } from '../../../firebase/errors';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [signInWithEmailAndPassword, user, loading, firebaseError] =
  useSignInWithEmailAndPassword(auth);

  const setAuthModalState = useSetRecoilState(authModalState);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  const errorMessage = () => {
    if(firebaseError) {
      return FIREBASE_ERRORS[firebaseError?.message as keyof typeof FIREBASE_ERRORS] ?? 'an error has occured';
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const setViewToResetPassword = () => {
    setAuthModalState((prev) => ({
      ...prev,
      view: 'resetPassword',
    }));
  }

  const setViewToSignup = () => {
    setAuthModalState((prev) => ({
      ...prev,
      view: 'signup',
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        placeholder="email"
        type="email"
        autoComplete="username"
        mb={2}
        onChange={onChange}
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
      <Input
        name="password"
        placeholder="password"
        type="password"
        autoComplete="current-password"
        mb={2}
        onChange={onChange}
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
      <Text align="center" fontSize="9px" color="red.400" fontWeight={700}>
        {errorMessage()}
      </Text>
      <Button
        type="submit"
        width="100%"
        fontSize="14px"
        height="36px"
        mt={2}
        mb={2}
        isLoading={loading}
      >
        Log In
      </Button>
      <Flex justifyContent="center" mb={2}>
        <Text fontSize="9pt" mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize="9pt"
          color="brand.300"
          cursor="pointer"
          onClick={setViewToResetPassword}
        >
          Reset
        </Text>
      </Flex>
      <Flex fontSize="9px" justifyContent="center">
        <Text mr={1}>New here?</Text>
        <Text
          color="brand.300"
          fontWeight={700}
          cursor="pointer"
          onClick={setViewToSignup}
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
