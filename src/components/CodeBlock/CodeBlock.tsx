import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
	children: React.ReactNode;
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
			}}
		>
			{children}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
