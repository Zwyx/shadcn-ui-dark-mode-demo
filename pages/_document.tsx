import { Metadata } from "next";
import { Head, Html, Main, NextScript } from "next/document";

export const metadata: Metadata = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
