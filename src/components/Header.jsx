import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        zIndex={'overlay'}
        position={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'whatsapp'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'20px'}
        ref={btnRef}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Universe Media App</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'}>
                <NavLink to="/">Home</NavLink>
              </Button>
              <Button onClick={onClose} variant={'ghost'}>
                <NavLink to="/videos">Videos</NavLink>
              </Button>
              <Button onClick={onClose} variant={'ghost'}>
                <NavLink to="/videos?category=free">Free Video</NavLink>
              </Button>
              <Button onClick={onClose} variant={'ghost'}>
                <NavLink to="/upload">Upload Video</NavLink>
              </Button>
            </VStack>
            <HStack
              position={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to="/login">Log in </Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to="/signup">Sign Up </Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
