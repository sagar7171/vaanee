import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel="stylesheet" href="/style/videoPlayer.css"></link>
				<link rel="stylesheet" href="/style/pagination.css"></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
