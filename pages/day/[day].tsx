// import styles from '../styles/Home.module.css';
import { Content, ContentModel } from '../../lib/content';
import { getContents } from '../../lib/spreadsheet';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack, Box } from '@mui/material';
import { ParsedUrlQuery } from 'querystring';

import { Day } from '../../lib/content';
import styles from '../../styles/[day].module.css';


type Props = { contents: Content[] }
interface Params extends ParsedUrlQuery {
	day: Day,
}

const model = new ContentModel();


const LineChat = (props: { comments: string[], title:string}) => {
	return (
		<Container maxWidth="md" className={styles.main}>
			<Box className={styles.header}>{props.title}（{props.comments.length}人）</Box>
			<Stack spacing={0}>
				{props.comments.map(c =>
					<Box key={c} className={styles.wrapper}>
						<span className={styles.icon}></span>
						<div className={styles.comment}>{c}</div>
					</Box>)
				}
			</Stack>
		</Container>
	)
}

export default function DailyResults({ contents }: Props) {
	return (
		<LineChat comments={contents} title="実践的機械学習Ⅰ 2022"/>
	)
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { day } = context.params!;
	const sheet_id = model.get_sheet_id(day);
	const contents = await getContents(sheet_id);
	return {
		props: { contents },
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