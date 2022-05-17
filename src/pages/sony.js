import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Wrap, WrapItem, Flex, Spacer, Button, Collapse } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import { Navbar, Card } from '../components';
import { data2 } from '../../db';


export default function Others() {
 
  return (
    <Box>
      <Head>
        <title>Sony</title>
        <meta name="description" content="Other Universes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Flex align="center" justify="center" wrap="wrap">
        {data2.map((show) => (<Card key={show.id} movie={show} />))}
      </Flex>

    </Box>
  );
};