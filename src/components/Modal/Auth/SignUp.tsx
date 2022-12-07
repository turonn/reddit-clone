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
import { auth } from '../../../firebase/clientApp';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp: React.FC = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [formError, setFormError] = useState('');

  const containsWhitespace = (str: string) => {
    return /\s/.test(str);
  };

  const setAuthModalState = useSetRecoilState(authModalState);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (containsWhitespace(signUpForm.password)) {
      setFormError('Passwords cannot contain whitespace');
      return;
    }
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setFormError('Passwords do not match.');
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

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
        autoComplete="new-password"
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
        name="confirmPassword"
        placeholder="confirm password"
        type="password"
        autoComplete="new-password"
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
      {formError && (
        <Text align="center" fontSize="9px" color="red.400" fontWeight={700}>
          {formError}
        </Text>
      )}
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
