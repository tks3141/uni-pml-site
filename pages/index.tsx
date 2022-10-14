import * as React from 'react';
import { Stack, Box, Typography, Container, Button } from '@mui/material';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';


const ClassLink = (props: { to: string, display_name: string }) => {
  return (
    <Box>
      <Link href={props.to} passHref>
        <Button>
          {props.display_name}
        </Button>
      </Link>
    </Box>
  )
}

export default function Index() {
  return (
    <>
      <Head>
        <title>実践的機械学習Ⅱ 2022</title>
      </Head>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            実践的機械学習Ⅱ 2022
          </Typography>
          講義感想一覧
          <Stack>
            <ClassLink to="/day/2022-10-07" display_name="・2022-10-07" />
            <ClassLink to="/day/2022-10-14" display_name="・2022-10-14" />
            {/* <ClassLink to="/day/2022-05-06" display_name="・2022-05-06" />
            <ClassLink to="/day/2022-05-13" display_name="・2022-05-13" />
            <ClassLink to="/day/2022-05-20" display_name="・2022-05-20" />
            <ClassLink to="/day/2022-05-27" display_name="・2022-05-27" />
            <ClassLink to="/day/2022-06-03" display_name="・2022-06-03" />
            <ClassLink to="/day/2022-06-10" display_name="・2022-06-10" />
            <ClassLink to="/day/2022-06-17" display_name="・2022-06-17" />
            <ClassLink to="/day/2022-06-24" display_name="・2022-06-24" />
            <ClassLink to="/day/2022-07-01" display_name="・2022-07-01" />
            <ClassLink to="/day/2022-07-08" display_name="・2022-07-08" />
            <ClassLink to="/day/2022-07-15" display_name="・2022-07-15" />
            <ClassLink to="/day/2022-07-22" display_name="・2022-07-22" />
            <ClassLink to="/day/last_report" display_name="・全体を通して学んだことなど" /> */}
          </Stack>
        </Box>
      </Container>
    </>

  );
}
