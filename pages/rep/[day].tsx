// import styles from '../styles/Home.module.css';
import { Content, ContentModel } from '../../lib/content';
import { getContents, getReplys } from '../../lib/spreadsheet';
import { GetStaticPaths, GetStaticProps } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack, Box } from '@mui/material';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';


import { Day } from '../../lib/content';
import styles from '../../styles/[day].module.css';
import Head from 'next/head';
import { ContentResponse } from '../../domain/response';
import { LineChat, LineChatProps, LinePop, LineComment } from "../../components/line";


type Props = {
	contents: Content[],
	responses: ContentResponse[],
	day?: string,
}
interface Params extends ParsedUrlQuery {
	day: Day,
}

const model = new ContentModel();



export default function DailyResultReps({ contents, day, responses }: Props) {
	const page_title = `実践的機械学習Ⅰ ${day}`;

	const rep_comments: LineComment[] = Array();
	responses.forEach(res => {
		const t_comment: LineComment = { message: contents[res.to+1], pos: 'left', name: String(res.to) }
		const rep_comment: LineComment = { message: res.message, pos: 'right' };
		rep_comments.push(t_comment, rep_comment)
	});

	return (
		<>
			<Head>
				<title>{page_title}</title>
			</Head>
			<LineChat comments={rep_comments} title={page_title} />
		</>
	)
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { day } = context.params!;
	const sheet_id = model.get_sheet_id(day);
	const contents = await getContents(sheet_id);
	const responses = await getReplys(sheet_id);
	return {
		props: { contents, responses, day },
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