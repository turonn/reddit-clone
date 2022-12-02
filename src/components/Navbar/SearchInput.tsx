import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

type SearchInputProps = {
  // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex flexGrow={1} mr={2} align='center'>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.500" mb={1} />
        </InputLeftElement>
        <Input
          placeholder="Search"
          fontSize="10pt"
          _placeholder={{ color: 'gray.500' }}
          _hover={{
            bg: 'white',
            border: '1px solid',
            borderColor: 'brand.400'
          }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'brand.300'
          }}
          height='34px'
          bg='gray.50'
          color='black'
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
