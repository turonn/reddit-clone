import { Flex } from '@chakra-ui/react';
import React from 'react';

const Navbar:React.FC = () => {
  
  return (
    <Flex bg='brand.200' height='44px' padding='6px 12px'>
      <Flex>
        My Logo
      </Flex>
      {/* <RightContent /> */}
    </Flex>
  )
}
export default Navbar;