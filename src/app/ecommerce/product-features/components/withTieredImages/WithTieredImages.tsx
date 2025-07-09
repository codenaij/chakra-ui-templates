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

const features = [
	{
		name: "Sleek design",
		description:
			"The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.",
	},
	{
		name: "Comfort handle",
		description: "Shaped for steady pours and insulated to prevent burns.",
	},
	{
		name: "One-button control",
		description:
			"The one button control has a digital readout for setting temperature and turning the kettle on and off.",
	},
	{
		name: "Long spout",
		description:
			"Designed specifically for controlled pour-overs that don't slash or sputter.",
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
								Machined Kettle
							</Heading>
							<Text
								as="p"
								mt={2}
								fontSize={{ base: "3xl", sm: "4xl" }}
								fontWeight={"bold"}
								letterSpacing={"tight"}
								color={"gray.900"}
							>
								Elegant simplicity
							</Text>
						</Box>

						<Box as="dl" mt="10" className="mt-10">
							<VStack gap={10} align={"stretch"}>
								{features.map((feature) => (
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
							alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
							src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-09-main-detail.jpg"
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
								alt="Detail of temperature setting button on kettle bass with digital degree readout."
								src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-09-detail-01.jpg"
								aspectRatio={1}
								w={"full"}
								borderRadius={"lg"}
								bg="gray.100"
								objectFit="cover"
							/>
							<Image
								alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
								src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-09-detail-02.jpg"
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
