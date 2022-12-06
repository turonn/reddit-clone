import { Flex, Button, Image } from '@chakra-ui/react';
import React from 'react';

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button fontSize="14px" variant='oauth'>
        <Image src="images/googlelogo.png" height="20px" alt="Google Logo" mr={4}/>
        Continue with Google
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
