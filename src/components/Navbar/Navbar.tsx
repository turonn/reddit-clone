import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';

const Navbar:React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  
  return (
    <Flex bg='grey.500' height='44px' padding='6px 12px'>
      <Flex color='brand.200'>
        My Logo
      </Flex>
      {/* <Directory /> */}
      <SearchInput />
     <RightContent user={user} />
    </Flex>
  )
}
export default Navbar;