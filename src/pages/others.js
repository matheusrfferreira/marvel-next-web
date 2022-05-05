import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Wrap, WrapItem, Flex, Spacer, Button, Collapse } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { data } from '../../dataOthers';


export default function Others() {
 
  return (
    <Box>
      <Head>
        <title>Others</title>
        <meta name="description" content="Other Universes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Flex align="center" justify="center" wrap="wrap">
        {data.map((show) => (<Card key={show.id} poster={show.poster} 
          title={show.title} phase={show.phase} releaseYear={show.release_year}
         episodes={show.episodes} type={show.type}/>))}
      </Flex>

    </Box>
  );
};