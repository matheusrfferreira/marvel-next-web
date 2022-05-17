import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Wrap, WrapItem, Flex, Spacer, Button, Collapse } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import { Navbar, Card } from '../components';
import { dbHulu } from "../../database";


export default function Hulu() {
  return (
    <Box>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="MCU Movies & Series" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Flex align="center" justify="center" wrap="wrap">
        {dbHulu.map((show) => (<Card key={show.id} movie={show} />))}
      </Flex>

    </Box>
  );
};