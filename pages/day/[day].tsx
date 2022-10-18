// import styles from '../styles/Home.module.css';
import { Content, ContentModel } from '../../lib/content';
import { getContents } from '../../lib/spreadsheet';
import { GetStaticPaths, GetStaticProps } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack, Box } from '@mui/material';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';
import { Button } from '@mui/material';


import { Day } from '../../lib/content';
import styles from '../../styles/[day].module.css';
import Head from 'next/head';
import { LineChat, LineChatProps, LinePop, LineComment } from "../../components/line";


type Props = {
	contents: Content[],
	day?: string,
}
interface Params extends ParsedUrlQuery {
	day: Day,
}

const model = new ContentModel();

const a = (day: Day) => {};

export default function DailyResults({ contents, day }: Props) {
	const page_title = `実践的機械学習Ⅱ ${day}`;

	const comments: LineComment[] = contents.map((m, index) : LineComment => (
		{ message: m, pos: "left", name: String(index + 1) })
	).reverse();
	const repLink = <Link href={'/rep/' + day} passHref><Button color='secondary'><Typography>先生からの返信</Typography></Button></Link>;
	return (
		<>
			<Head>
				<title>{page_title}</title>
			</Head>
			<LineChat comments={comments} title={page_title} top={repLink} />
		</>
	)
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { day } = context.params!;
	const {sheet_id,n_col} = model.get_sheet_id(day);
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