import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const setAuthModalState = useSetRecoilState(authModalState);

  const onSubmit = () => {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

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
      <Button
        type="submit"
        width="100%"
        fontSize="14px"
        height="36px"
        mt={2}
        mb={2}
      >
        Log In
      </Button>
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
