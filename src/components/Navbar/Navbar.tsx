import { Flex } from '@chakra-ui/react';
import React from 'react';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';

const Navbar:React.FC = () => {
  
  return (
    <Flex bg='grey.500' height='44px' padding='6px 12px'>
      <Flex color='brand.200'>
        My Logo
      </Flex>
      {/* <Directory /> */}
      <SearchInput />
     <RightContent />
    </Flex>
  )
}
export default Navbar;