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
            <ClassLink to="/day/2022-10-07" display_name="授業にかける意気込み" />
            <ClassLink to="/day/2022-10-14" display_name="・2022-10-14" />
            <ClassLink to="/day/2022-10-21" display_name="・2022-10-21" />
            <ClassLink to="/day/2022-11-04" display_name="・2022-11-04" />
            <ClassLink to="/day/2022-11-11" display_name="・2022-11-11" />
            <ClassLink to="/day/2022-11-18" display_name="・2022-11-18" />
            <ClassLink to="/day/2022-11-25" display_name="・2022-11-25" />
            <ClassLink to="/day/2022-12-02" display_name="・2022-12-02" />
            <ClassLink to="/day/2022-12-09" display_name="・2022-12-09" />
            <ClassLink to="/day/2022-12-16" display_name="・2022-12-16" />
            <ClassLink to="/day/2022-12-23" display_name="・2022-12-23" />
            <ClassLink to="/day/2023-01-06" display_name="・2023-01-06" />
            <ClassLink to="/day/2023-01-20" display_name="・2023-01-20" />
            {/* <ClassLink to="/day/last_report" display_name="・全体を通して学んだことなど" /> */}
          </Stack>
        </Box>
      </Container>
    </>

  );
}
