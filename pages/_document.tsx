import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="theme-color"
					media="(prefers-color-scheme: light)"
					content="white"
				/>
				<meta
					name="theme-color"
					media="(prefers-color-scheme: dark)"
					content="black"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
