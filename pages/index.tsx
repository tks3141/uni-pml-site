import * as React from 'react';
import { Stack, Box, Typography, Container, Button } from '@mui/material';
import Link from 'next/link';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          実践的機械学習Ⅰ 2022
        </Typography>
        講義感想一覧
        <Stack spacing={2}>
          <Box>
            <Link href="/day/2022-04-15" passHref>
              <Button>
                ・2022-04-15
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
