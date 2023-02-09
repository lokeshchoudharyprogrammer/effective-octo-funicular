import React from 'react';
import { Container, Input, VStack, HStack, Button } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
export const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
          <HStack>
            <Input
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100% -50px)',
                  height: '100%',
                  color: 'purple',
                  backgroundColor: 'white',
                  marginLeft: '-18px',
                  cursor:"pointer"
                },
              }}
            />
            <Button type="submit">Upload</Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};
