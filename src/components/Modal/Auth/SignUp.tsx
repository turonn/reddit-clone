import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Input,
  Button,
  Flex,
  Text,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

const SignUp: React.FC = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const isValidPassword = () => {
    return (
      signUpForm.password === signUpForm.confirmPassword &&
      !containsWhitespace(signUpForm.password) &&
      signUpForm.password.length > 0
    );
  };
  const containsWhitespace = (str: string) => {
    return /\s/.test(str);
  };

  const setAuthModalState = useSetRecoilState(authModalState);

  const onSubmit = () => {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const setViewToLogin = () => {
    setAuthModalState((prev) => ({
      ...prev,
      view: 'login',
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        placeholder="email"
        type="email"
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
      <InputGroup>
        <Input
          name="password"
          placeholder="password"
          type="password"
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
        <InputRightElement>
          {isValidPassword() && <CheckIcon color="green.500" />}
          {!isValidPassword() && <CloseIcon color="red.500" />}
        </InputRightElement>
      </InputGroup>
      <InputGroup>
        <Input
          name="confirmPassword"
          placeholder="confirm password"
          type="password"
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
        <InputRightElement>
          {isValidPassword() && <CheckIcon color="green.500" />}
          {!isValidPassword() && <CloseIcon color="red.500" />}
        </InputRightElement>
      </InputGroup>
      <Button
        type="submit"
        width="100%"
        fontSize="14px"
        height="36px"
        mt={2}
        mb={2}
      >
        Sign Up
      </Button>
      <Flex fontSize="9px" justifyContent="center">
        <Text mr={1}>Have an account?</Text>
        <Text
          color="brand.300"
          fontWeight={700}
          cursor="pointer"
          onClick={setViewToLogin}
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
