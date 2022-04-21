// import styles from '../styles/Home.module.css';
import { Content, ContentModel } from '../../lib/content';
import { getContents } from '../../lib/spreadsheet';
import { GetStaticPaths, GetStaticProps } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack, Box } from '@mui/material';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';


import { Day } from '../../lib/content';
import styles from '../../styles/[day].module.css';
import Head from 'next/head';


type Props = {
	contents: Content[],
	day?: string,
}
interface Params extends ParsedUrlQuery {
	day: Day,
}

const model = new ContentModel();


const LinePop = (props: { comment: string, date?: string }) => {

	return (
		<Box className={styles.wrapper}>
			<span className={styles.icon}></span>
			{/* <div> ○月○日○時○分○</div> */}
			<div className={styles.comment}>{props.comment}</div>
		</Box>
	)
}

type LineChatProps = {
	comments: string[],
	title: string,
	date?: string,
	to?: () => {},
}
const LineChat = (props: LineChatProps) => {
	return (
		<Container maxWidth="md" className={styles.main}>
			<Box className={styles.header}>＜ {props.title}（{props.comments.length}人）</Box>
			<Stack spacing={0}>
				{props.comments.map(c => (<LinePop key={c.slice(10) + c.length} comment={c} />)
				)}
			</Stack>
		</Container>
	)
}

export default function DailyResults({ contents, day }: Props) {
	const page_title = `実践的機械学習Ⅰ ${day}`;
	return (
		<>
			<Head>
				<title>{page_title}</title>
			</Head>
			<LineChat comments={contents} title={page_title} />
		</>
	)
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { day } = context.params!;
	const sheet_id = model.get_sheet_id(day);
	const contents = await getContents(sheet_id);
	return {
		props: { contents, day },
		revalidate: 3600,
	};
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const paths = model.data.map(d => ({
		params: { day: d.day }
	}))
	console.log(paths)
	return {
		paths: paths,
		fallback: false
	}
}