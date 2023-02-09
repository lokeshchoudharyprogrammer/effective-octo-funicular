import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

export const Footer = () => {
  return (
    <div>
      <Box bgColor={'blackAlpha.800'} minH={'40'} p={'60'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign="center">
              Zet New Things
            </Heading>
            <HStack borderBottom={'2px solid white'}>
              <Input
                placeholder="Enter Mail Here"
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor="none"
              />
              <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'outline'}
                borderRadius={'0 20px 20px 0'}
                outline={'none'}
              >
                <AiOutlineSend size={20} />
              </Button>
            </HStack>
          </VStack>

          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              Universe
            </Heading>
            <Text>All &reg; Received </Text>
          </VStack>
          <VStack w={'full'}>
            <Heading
              textTransform={'uppercase'}
              textAlign={'center'}
              size={'md'}
            >
              Contact Us
            </Heading>
            <Button variant={'link'} colorScheme={'whatsapp'}>
              <a
                target={'blank'}
                href="https://github.com/lokeshchoudharyprogrammer"
              >
                Github
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'whatsapp'}>
              <a
                target={'blank'}
                href="https://www.instagram.com/lokeshchoudharyprogrammer/"
              >
                Instagram
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'whatsapp'}>
              <a target={'blank'} href="https://twitter.com/lokesh2026">
                Twitter
              </a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </div>
  );
};
