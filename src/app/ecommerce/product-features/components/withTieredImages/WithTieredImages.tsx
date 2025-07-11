import {
	Box,
	Container,
	Grid,
	GridItem,
	Heading,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		min: 4,
		max: 8,
	},
	wordsPerSentence: {
		max: 16,
		min: 8,
	},
});

const description = [
	{
		name: lorem.generateWords(2),
		description: lorem.generateSentences(2),
	},
	{
		name: lorem.generateWords(2),
		description: lorem.generateSentences(2),
	},
	{
		name: lorem.generateWords(2),
		description: lorem.generateSentences(2),
	},
	{
		name: lorem.generateWords(2),
		description: lorem.generateSentences(2),
	},
];

const WithTieredImages = () => {
	return (
		<Box bg={"white"}>
			<Container
				maxW={{ base: "2xl", lg: "7xl" }}
				px={{ base: 4, sm: 6, lg: 8 }}
				py={{ base: 24, sm: 32 }}
			>
				<Grid
					templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
					alignItems="center"
					columnGap={8}
					rowGap={16}
				>
					<GridItem>
						<Box borderBottom="1px solid" borderColor="gray.200" pb={10}>
							<Heading
								as="h2"
								fontWeight={"semibold"}
								color={"gray.500"}
								fontSize={"md"}
							>
								Apple&apos;s latest flagship phone.
							</Heading>
							<Text
								as="p"
								mt={2}
								fontSize={{ base: "3xl", sm: "4xl" }}
								fontWeight={"bold"}
								letterSpacing={"tight"}
								color={"gray.900"}
							>
								Iphone 15 Pro Max
							</Text>
						</Box>

						<Box as="dl" mt="10" className="mt-10">
							<VStack gap={10} align={"stretch"}>
								{description.map((feature) => (
									<Box key={feature.name}>
										<Text
											as="dt"
											fontSize={"sm"}
											fontWeight={"medium"}
											color="gray.900"
										>
											{feature.name}
										</Text>
										<Text as="dd" mt={3} fontSize={"sm"} color={"gray.500"}>
											{feature.description}
										</Text>
									</Box>
								))}
							</VStack>
						</Box>
					</GridItem>

					<GridItem>
						<Image
							alt={lorem.generateWords(2)}
							src="https://images.unsplash.com/photo-1680337673571-e194b42583ab?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							aspectRatio={1}
							w={"full"}
							borderRadius={"lg"}
							bg="gray.100"
							objectFit="cover"
						/>
						<Grid
							templateColumns="repeat(2, 1fr)"
							gap={{ base: 4, sm: 6, lg: 8 }}
							mt={{ base: 4, sm: 6, lg: 8 }}
						>
							<Image
								alt={lorem.generateWords(2)}
								src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								aspectRatio={1}
								w={"full"}
								borderRadius={"lg"}
								bg="gray.100"
								objectFit="cover"
							/>
							<Image
								alt={lorem.generateWords(2)}
								src="https://images.unsplash.com/photo-1630299098851-b55590a59235?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								aspectRatio={1}
								w={"full"}
								borderRadius={"lg"}
								bg="gray.100"
								objectFit="cover"
							/>
						</Grid>
					</GridItem>
				</Grid>
			</Container>
		</Box>
	);
};

export default WithTieredImages;
