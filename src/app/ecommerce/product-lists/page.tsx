"use client";

import MainComponentBlock from "@/components/MainComponentBlock/MainComponentBlock";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Basic from "./components/basic/Basic";
import { basicString } from "./components/basic/basicString";

import WithBorderGrid from "./components/withBorderGrid/WithBorderGrid";
import { withBorderGridString } from "./components/withBorderGrid/withBorderGridString";
import WithCtaLink from "./components/withCtaLink/WithCtaLink";
import { withCtaLinkString } from "./components/withCtaLink/withCtaLinkString";

const ProductListsPage = () => {
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
			<MainComponentBlock
				title="Basic"
				codeString={basicString}
				component={<Basic />}
			/>
			<MainComponentBlock
				title="With Border Grid"
				codeString={withBorderGridString}
				component={<WithBorderGrid />}
			/>
			<MainComponentBlock
				title="With CTA Link"
				codeString={withCtaLinkString}
				component={<WithCtaLink />}
			/>
		</Box>
	);
};

export default ProductListsPage;
