import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack, Box, Button } from '@mui/material';


import { Day } from '../lib/content';
import styles from '../styles/[day].module.css';
import { ContentResponse } from '../domain/response';
import { ReactNode } from 'react';
import Link from 'next/link';

export function LinePop(props: LineComment) {
  if (props.pos == 'right') {
    // pos right
    return (
      // right allign
      <Box className={styles.teacher}>
        <div className={styles.icon}></div>
        <div className={styles.wrapper}>
          <div className={styles.name}>先生</div>
        </div>
        <div className={styles.right_wrapper}>
          <div className={styles.comment}><div className={styles.left_wrapper}>{props.message}</div></div>
          {/* <div> ○月○日○時○分○</div> */}
        </div>
      </Box>
    )
  } else {
    // pos left (default) 	
    return (
      <Box className={styles.student}>
        <div className={styles.icon}></div>
        <div className={styles.name}>学生-{props.name}</div>
        <div className={styles.comment}>{props.message}</div>
        {/* <div> ○月○日○時○分○</div> */}
      </Box>
    )
  }
}


export interface LineComment {
  message: string,
  pos?: 'left' | 'right',
  name?: string,
  date?: string,
}

export interface LineChatProps {
  comments: LineComment[],
  title: string,
  date?: string,
  // to?: () => {},
  href?: string,
  top?: ReactNode,
  num_members?: number,
}

export function LineChat(props: LineChatProps) {
  const num_members = props.num_members || props.comments.length;

  const title_with_link = <Link href={props.href || '/'} passHref><Button>＜ {props.title}</Button></Link>;

  return (
    <Container maxWidth="md" className={styles.main}>
      <Box className={styles.header}>{title_with_link}（{num_members}人） {props.top}</Box>
      <Stack spacing={0}>
        {props.comments.map((c, index) => (<LinePop {...c} key={index + 1} />)
        )}
      </Stack>
    </Container>
  )
}

