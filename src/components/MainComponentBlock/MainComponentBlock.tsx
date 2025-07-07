import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import CodeBlock from "../CodeBlock/CodeBlock";
import { Radio, RadioGroup } from "../ui/radio";

interface MainComponentBlockProps {
	// view: "preview" | "code";
	codeString: string;
	component: React.ReactNode;
}

const MainComponentBlock = ({
	codeString,
	component,
}: Readonly<MainComponentBlockProps>) => {
	const [view, setView] = useState<"preview" | "code">("preview");
	return (
		<Box mx={"auto"} border={"2px solid"} borderColor={"black"} my={4}>
			<Box>
				<Flex
					bg={"purple"}
					justifyContent={"space-between"}
					alignItems={"center"}
					p={4}
				>
					<Text fontSize={"xl"} fontWeight={"bold"}>
						Basic
					</Text>
					<Flex gap={2} alignItems={"center"}>
						<RadioGroup
							value={view}
							onValueChange={({ value }) => {
								setView(value as "code" | "preview");
							}}
							variant={"roundedLightOutlineBrand"}
						>
							<Radio value="preview">Preview</Radio>
							<Radio value="code">Code</Radio>
						</RadioGroup>
						<IconButton variant={"closeElevated"} size={"sm"} bg={"basic.100"}>
							<LuExternalLink />
						</IconButton>
					</Flex>
				</Flex>
			</Box>
			{view === "code" && <CodeBlock>{codeString}</CodeBlock>}
			{view === "preview" && component}
		</Box>
	);
};

export default MainComponentBlock;
