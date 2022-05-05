import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Collapse,
  Lorem,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';


export default function Card({ poster, phase, title, releaseYear, runningTime, episodes, type }) {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Center py={12} margin={5}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        h='600px'
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
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
            backgroundImage: `url(${poster?.src})`,
            filter: 'blur(20px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(50px)',
            },
          }}>
          <Image
            alt={title}
            rounded={'lg'}
            //height={400}
            width={282}
            objectFit={'cover'}
            src={poster?.src}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Phase {phase}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} textAlign="center">
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {releaseYear} |
            </Text>
            <Text  color={'gray.600'}>
              {type}
            </Text>
          </Stack>
          {/* <Stack align={'center'}>
            <Text fontWeight={400} fontSize={'xl'}>
            {runningTime} minutes
            </Text>
          </Stack> */}
          {/* {episodes && (
            <>
              <Button onClick={onToggle}>Episodes</Button>
              <Collapse in={isOpen} animateOpacity>
              <Box
                p='40px'
                
                mt='4'
                rounded='md'
                shadow='md'
              >
              <OrderedList>  
                {episodes.map((episode) => (
                  <ListItem key={episode.title}>{episode.title}</ListItem>
                ))}
                </OrderedList>    
                  
              </Box>
              </Collapse>
            </>
          )} */}
          
        </Stack>
      </Box>

    </Center>
  );
}

