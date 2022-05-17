import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Wrap, WrapItem, Flex, Spacer, Button, Collapse } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import { Navbar, Card } from '../components';
import { dbFreeform } from "../../database";


export default function Freeform() {
  return (
    <Box>
      <Head>
        <title>Freeform</title>
        <meta name="description" content="MCU Movies & Series" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Flex align="center" justify="center" wrap="wrap">
        {dbFreeform.map((show) => (<Card key={show.id} movie={show} />))}
      </Flex>

    </Box>
  );
};