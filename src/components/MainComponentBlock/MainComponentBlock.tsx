"use client";

import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuCheck, LuClipboardCopy, LuExternalLink } from "react-icons/lu";
import CodeBlock from "../CodeBlock/CodeBlock";
import { Radio, RadioGroup } from "../ui/radio";

interface MainComponentBlockProps {
	title: string;
	codeString: string;
	component: React.ReactNode;
	link?: string;
}

const MainComponentBlock = ({
	title,
	codeString,
	component,
	link,
}: Readonly<MainComponentBlockProps>) => {
	const [view, setView] = useState<"preview" | "code">("preview");
	const [isCopied, setIsCopied] = useState(false);
	const router = useRouter();
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
						{title}
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
						<IconButton
							variant={"closeElevated"}
							size={"sm"}
							bg={"basic.100"}
							onClick={() => {
								if (view === "code") {
									navigator.clipboard.writeText(codeString);
									setIsCopied(true);
									setTimeout(() => {
										setIsCopied(false);
									}, 2000);
								}
								if (view === "preview" && link) {
									router.push(link);
								}
							}}
						>
							{view === "preview" ? (
								<LuExternalLink color={"black"} />
							) : (
								<Box>
									{isCopied ? (
										<LuCheck color="black" />
									) : (
										<LuClipboardCopy color={"black"} />
									)}
								</Box>
							)}
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
