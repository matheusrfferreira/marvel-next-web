import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, AtSignIcon } from '@chakra-ui/icons';

import MarvelStudiosLogo from '../../assets/images/marvel-studios-logo.png';


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* <Box>
          <Image
              height="55"
              objectFit='cover'
              src={MarvelStudiosLogo.src}
              alt='Marvel Studios Logo'
            />
          </Box> */}
          <Box
          // rounded={'lg'}
          // mt={-12}
          pos={'relative'}
         //height={'400px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${MarvelStudiosLogo.src})`,
            filter: 'blur(20px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(50px)',
            },
          }}>
          <Image
              height="55"
              objectFit='cover'
              src={MarvelStudiosLogo.src}
              alt='Marvel Studios Logo'
            />
        </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};