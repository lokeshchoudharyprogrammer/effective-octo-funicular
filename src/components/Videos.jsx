import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import videos1 from '../assets/video1.mp4';
export const Videos = () => {
  const videos = [
    'https://joy1.videvo.net/videvo_files/video/free/video0455/large_watermarked/_import_609113a1be0e89.39394997_preview.mp4',
    'https://joy1.videvo.net/videvo_files/video/free/2019-05/large_watermarked/190516_06_AZ-LAGOA-30_preview.mp4',
    'https://joy1.videvo.net/videvo_files/video/free/video0476/large_watermarked/_import_621da8d8e3f701.40263170_preview.mp4',
    'https://joy1.videvo.net/videvo_files/video/free/video0461/large_watermarked/_import_60e0167b4c3a96.14254367_preview.mp4',
    'https://joy1.videvo.net/videvo_files/video/free/2019-09/large_watermarked/190828_27_SuperTrees_HD_17_preview.mp4',
    'https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
  ];
  const [index, setIndex] = useState(videos[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={index}
          style={{ width: '80%' }}
        ></video>
        <VStack alignItems={'flex-start'} p={'9'} w={'full'} overflowY={'auto'}>
          <Heading>Bigest World</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            repudiandae dolorum ea itaque, magni aliquam corrupti similique nemo
            pariatur non harum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolores repudiandae dolorum ea itaque, magni
            
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        spacing={'8'}
        p="8"
        overflowY={'auto'}
      >
        {videos.map((item, inde) => {
          return (
            <Button
              variant={'ghost'}
              colorScheme={'whatsapp'}
              onClick={() => setIndex(item)}
            >
              Lecture {inde + 1}
            </Button>
          );
        })}
      </VStack>
    </Stack>
  );
};
