import { Flex, Icon } from '@chakra-ui/react';
import { GiTrumpet } from 'react-icons/gi';
import { FaSchool } from 'react-icons/fa';
import React from 'react';

const Icons: React.FC = () => {
  return (
    <Flex align="center" ml={1.5}>
      <Flex
        mr={1.5}
        padding={1}
        color="brand.200"
        cursor="pointer"
        borderRadius={4}
        _hover={{ color: 'brand.400' }}
      >
        <Icon as={FaSchool} fontSize={20} />
      </Flex>
      <Flex
        mr={1.5}
        padding={1}
        color="brand.200"
        cursor="pointer"
        borderRadius={4}
        _hover={{ color: 'brand.400' }}
      >
        <Icon as={GiTrumpet} fontSize={20} />
      </Flex>
    </Flex>
  );
};
export default Icons;
