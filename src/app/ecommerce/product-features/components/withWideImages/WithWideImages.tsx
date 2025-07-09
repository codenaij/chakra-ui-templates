import {
	Box,
	Container,
	GridItem,
	Heading,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";

const features = [
	{
		name: "Adventure-ready",
		description:
			"The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.",
		imageSrc:
			"https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-04-detail-03.jpg",
		imageAlt: "Printed photo of bag being tossed into the sky on top of grass.",
	},
	{
		name: "Minimal and clean",
		description:
			"Everything you need, nothing you don't. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.",
		imageSrc:
			"https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-04-detail-01.jpg",
		imageAlt: "Double stitched black canvas hook loop.",
	},
	{
		name: "Organized",
		description:
			"Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.",
		imageSrc:
			"https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-04-detail-02.jpg",
		imageAlt: "Black canvas body with chrome zipper and key ring.",
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
							Drawstring Canister
						</Heading>
						<Text
							as="p"
							mt={2}
							fontSize={{ base: "3xl", sm: "4xl" }}
							fontWeight={"bold"}
							letterSpacing={"tight"}
							color={"gray.900"}
						>
							Use it your way
						</Text>
						<Text as="p" mt={4} color={"gray.500"}>
							The Drawstring Canister comes with multiple strap and handle
							options to adapt throughout your day. Shoulder sling it, backpack
							it, or handy carry it.
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
						{features.map((feature) => (
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
										alt={feature.imageAlt}
										src={feature.imageSrc}
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
