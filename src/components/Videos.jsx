import { Stack, VStack } from '@chakra-ui/react';
import React from 'react';

export const Videos = () => {
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          scr=""
          style={{ width: '100%' }}
        ></video>
      </VStack>
      <VStack>
        
      </VStack>
    </Stack>
  );
};
