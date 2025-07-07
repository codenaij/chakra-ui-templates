import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
	children: string;
	language?: string;
}

const CodeBlock = ({
	children,
	language = "jsx",
}: Readonly<CodeBlockProps>) => {
	return (
		<SyntaxHighlighter
			language={language}
			style={tomorrow}
			customStyle={{
				margin: 0,
				fontSize: "0.75rem",
				height: "500px",
			}}
		>
			{children}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
