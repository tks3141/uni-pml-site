// import styles from '../styles/Home.module.css';
import { Content, form_data } from '../../lib/content';
import { getContents } from '../../lib/spreadsheet';

export default function Day1({ contents }: { contents: Content[] }) {
	return (<div>
		{contents.map(c => <div key={c}>{c}</div>)}
	</div>)
}

const sheet_id = form_data[0]['sheet_id'];

export async function getStaticProps() {
	const contents = await getContents(sheet_id);
	return {
		props: { contents },
		revalidate: 3600,
	};
}