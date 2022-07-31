// import styles from '../styles/Home.module.css';
import { Content, ContentModel } from '../../lib/content';
import { getContents, getReplys } from '../../lib/spreadsheet';
import { GetStaticPaths, GetStaticProps } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack, Box, Button } from '@mui/material';
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
	const backLink = <Link href={'/day/last_report'} passHref><Button>コメント一覧へ</Button></Link>;

	const rep_comments: LineComment[] = Array();
	responses.forEach(res => {
		const t_comment: LineComment = { message: contents[res.to-1], pos: 'left', name: String(res.to) }
		const rep_comment: LineComment = { message: res.message, pos: 'right' };
		rep_comments.push(t_comment, rep_comment)
	});

	return (
		<>
			<Head>
				<title>{page_title}</title>
			</Head>
			<LineChat comments={rep_comments} title={page_title} top={backLink} num_members={rep_comments.length/2}/>
		</>
	)
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const day = '2022-07-22';
	const sheet_id = model.get_sheet_id(day);
	const contents = await getContents(sheet_id,6);
	const responses = await getReplys(sheet_id,'シート3');
	return {
		props: { contents, responses, day },
		revalidate: 300,
	};
}