import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon  } from '@chakra-ui/icons';


const Links = [
  {
    link: "MCU", 
    href: "/"
  }, 
  {
    link: "Sony", 
    href: "sony"
  },
  {
    link: "Fox", 
    href: "fox"
  },
  {
    link: "ABC", 
    href: "abc"
  },
  {
    link: "Netflix", 
    href: "netflix"
  },
  {
    link: "Hulu", 
    href: "hulu"
  },
  {
    link: "Freeform", 
    href: "freeform"
  }
];

const NavLink = ({ link, href }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {link}
  </Link>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box
              role={'group'}
              p={6}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              //  zIndex={1}
              >
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={900} textAlign="center">
                  MARVEL
                </Heading>
              </Box>
        {/* </Box> */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.link} link={link.link} href={link.href}/>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
                <NavLink key={link.link} link={link.link} href={link.href}/>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};