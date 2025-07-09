import { Center, Flex, Text } from "@chakra-ui/react";

interface PageHeadingProps {
	title: string;
	subTitle: string;
	description: string;
}

const PageHeading = ({ title, subTitle, description }: PageHeadingProps) => {
	return (
		<Center py={10}>
			<Flex flexDir={"column"} alignItems={"center"} gap={2}>
				<Text fontSize={"xl"} fontWeight={"bold"} color={"gray.900"}>
					{title}
				</Text>
				<Text fontSize={"3xl"} fontWeight={"bold"} color={"gray.900"}>
					{subTitle}
				</Text>
				<Text fontSize={"md"} color={"gray.500"} textAlign={"center"}>
					{description}
				</Text>
			</Flex>
		</Center>
	);
};

export default PageHeading;
