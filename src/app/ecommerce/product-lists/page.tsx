"use client";

import MainComponentBlock from "@/components/MainComponentBlock/MainComponentBlock";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Basic from "./components/Basic";
import { basicString } from "./components/basicString";

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
			<MainComponentBlock codeString={basicString} component={<Basic />} />
		</Box>
	);
};

export default ProductListsPage;
