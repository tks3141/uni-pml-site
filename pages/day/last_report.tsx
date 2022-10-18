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

export default function DailyResults({ contents, day }: Props) {
	const page_title = `実践的機械学習Ⅱ ${day}`;

	const comments: LineComment[] = contents.map((m, index) => ({ message: m, pos: 'left', name: String(index + 1) }))
	const repLink = <Link href={'/rep/last_report'} passHref><Button color='secondary'><Typography>先生からの返信</Typography></Button></Link>;
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
	const day = model.get_last_day();
	const { sheet_id, n_col } = model.get_sheet_id(day);
	const contents = await getContents(sheet_id, 6);
	// todo : ここをラストレポートがあるかどうかで分岐させる
	if (false) {
		return {
			props: { contents, day },
			revalidate: 300,
		};
	} else {
		return { props: { contents: [], responses: [], day: day } };
	}
}