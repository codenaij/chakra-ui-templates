import {
	Box,
	Container,
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
		productImgSrc:
			"https://images.unsplash.com/photo-1680337673571-e194b42583ab?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		productImgAlt:
			"Printed photo of bag being tossed into the sky on top of grass.",
	},
	{
		name: lorem.generateWords(2),
		description: lorem.generateSentences(2),
		productImgSrc:
			"https://images.unsplash.com/photo-1545235617-7a424c1a60cc?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		productImgAlt: "Double stitched black canvas hook loop.",
	},
	{
		name: lorem.generateWords(2),
		description: lorem.generateSentences(2),
		productImgSrc:
			"https://images.unsplash.com/photo-1630299098851-b55590a59235?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		productImgAlt: "Black canvas body with chrome zipper and key ring.",
	},
];

const WithWideImages = () => {
	return (
		<Box bg={"white"}>
			<Container maxW={"7xl"} py={{ base: 24, sm: 32 }} px={{ sm: 2, lg: 4 }}>
				<Container maxW={{ base: "2xl", lg: "none" }} px={4}>
					<Box maxW={"3xl"}>
						<Heading
							as="h2"
							fontWeight={"semibold"}
							color={"gray.500"}
							fontSize={"md"}
						>
							Apple's latest flagship phone.
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
						<Text as="p" mt={4} color={"gray.500"}>
							{lorem.generateSentences(3)}
						</Text>
					</Box>

					<VStack
						mt={{ base: 10, sm: 16 }}
						gap={16}
						borderTop={"1px solid"}
						borderColor={"gray.200"}
						pt={{ base: 10 }}
						alignItems={"stretch"}
					>
						{description.map((feature) => (
							<Box
								key={feature.name}
								display={{ base: "flex", lg: "grid" }}
								flexDir={{ base: "column-reverse", lg: "unset" }}
								gridTemplateColumns={{ lg: "repeat(12, 1fr)" }}
								columnGap={{ lg: 8 }}
								rowGap={{ lg: 6 }}
								alignItems={{ lg: "center" }}
							>
								<GridItem mt={{ base: 6, lg: 0 }} colSpan={{ lg: 5, xl: 4 }}>
									<Heading
										as="h3"
										fontSize={"lg"}
										fontWeight={"medium"}
										color={"gray.900"}
									>
										{feature.name}
									</Heading>
									<Text as="p" mt={2} fontSize={"sm"} color={"gray.500"}>
										{feature.description}
									</Text>
								</GridItem>
								<GridItem flexGrow={1} colSpan={{ lg: 7, xl: 8 }}>
									<Image
										alt={feature.productImgAlt}
										src={feature.productImgSrc}
										w={"full"}
										aspectRatio={5 / 2}
										borderRadius={"lg"}
										bg={"gray.100"}
										objectFit={"cover"}
									/>
								</GridItem>
							</Box>
						))}
					</VStack>
				</Container>
			</Container>
		</Box>
	);
};

export default WithWideImages;
