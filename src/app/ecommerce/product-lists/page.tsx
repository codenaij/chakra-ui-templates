"use client";

import { Radio, RadioGroup } from "@/components/ui/radio";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Basic from "./components/Basic";

const ProductListsPage = () => {
	const [view, setView] = useState<"preview" | "code">("preview");
	return (
		<Box>
			<Center py={10}>
				<Flex flexDir={"column"} alignItems={"center"} gap={2}>
					<Text fontSize={"xl"} fontWeight={"bold"}>
						Ecommerce
					</Text>
					<Text fontSize={"3xl"} fontWeight={"bold"}>
						Product Lists
					</Text>
					<Text fontSize={"md"} color={"gray.500"} textAlign={"center"}>
						Components for displaying a list of products for your application
					</Text>
				</Flex>
			</Center>

			<Flex
				bg={"purple"}
				borderTop={"2px solid"}
				borderLeft={"2px solid"}
				borderRight={"2px solid"}
				justifyContent={"space-between"}
				alignItems={"center"}
				p={4}
				mx={"auto"}
				maxW={{ base: "2xl", lg: "7xl" }}
			>
				<Text fontSize={"xl"} fontWeight={"bold"}>
					Basic
				</Text>
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
			</Flex>
			<Center>
				<Basic view={view} />
			</Center>
		</Box>
	);
};

export default ProductListsPage;
