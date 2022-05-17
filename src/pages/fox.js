import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Wrap, WrapItem, Flex, Spacer, Button, Collapse } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import { Navbar, Card } from '../components';
import { data } from '../../db';
import { dbFox } from "../../database";


export default function Fox() {
  return (
    <Box>
      <Head>
        <title>Fox</title>
        <meta name="description" content="MCU Movies & Series" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Flex align="center" justify="center" wrap="wrap">
        {dbFox.map((show) => (<Card key={show.id} movie={show} />))}
      </Flex>

    </Box>
  );
};