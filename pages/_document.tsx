import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
	const url = '<https://tohoku-pml.vercel.app>';
	const title = '実践的機械学習Ⅰ 2022';
	const description = '実践的機械学習Ⅰ 2022の仮サイト';

	return (
		<Html lang="ja-JP">
			<Head>
				<meta name="description" content={description} />
				{/* <meta name="theme-color" content="#333" /> */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content={url} />
				<meta property="og:description" content={description} />
				<meta property="og:site_name" content={title} />
				<link rel="apple-touch-icon" href="apple-touch-icon.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default MyDocument;