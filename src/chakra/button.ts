import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '60px',
    fontSize: '10px',
    fontWeight: 700,
    color: 'brand.400',
    _focus: {
      boxShadow: 'none',
    },
  },
  sizes: {
    sm: {
      fontSize: '8px',
    },
    md: {
      fontSize: '10px',
    },
  },
  variants: {
    solid: {
      color: 'brand.200',
      bg: 'brand.300',
      border: '1px solid',
      borderColor: 'brand.300',
      _hover: {
        bg: 'brand.400',
        borderColor: 'brand.400',
      },
    },
    outline: {
      color: 'brand.200',
      bg: 'brand.100',
      border: '1px solid',
      borderColor: 'brand.200',
      _hover: {
        bg: 'brand.400',
        borderColor: 'brand.400',
      },
    },
    oauth: {
      color: 'brand.200',
      height: '34px',
      border: '1px solid',
      bg: 'gray.200',
      borderColor: 'brand.200',
      _hover: {
        bg: 'brand.400',
        borderColor: 'brand.400',
      },
    }
  },
};
