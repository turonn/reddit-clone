import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Icon,
  Flex,
  MenuDivider,
} from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import { VscAccount } from 'react-icons/vsc';
import { MdOutlineLogin } from 'react-icons/md';
import React from 'react';
import { auth } from '../../../firebase/clientApp';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        color="brand.200"
        padding="0px 6px"
        borderRadius={4}
        _hover={{ color: 'brand.400' }}
      >
        <Flex align="center">
          <Icon as={VscAccount} fontSize={24} mr={1} />
          {user ? (
            <Flex>show</Flex>
          ) : (<></>)}
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {user ? (
          <>
            <MenuItem _hover={{ bg: 'brand.400' }}>
              <Flex align="center">Profile</Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              _hover={{ bg: 'brand.400' }}
              onClick={() => signOut(auth)}
            >
              <Flex align="center">
                <Icon fontSize={20} as={MdOutlineLogin} mr={2} />
                Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              _hover={{ bg: 'brand.400' }}
              onClick={() => setAuthModalState({ open: true, view: 'login' })}
            >
              <Flex align="center">
                <Icon fontSize={20} as={MdOutlineLogin} mr={2} />
                Log In
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
