export const withSupportingTextString = `
import {
	Box,
	For,
	Grid,
	Image,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/react";

const products = [
	{
		id: 1,
		name: "Nomad Pouch",
		href: "#",
		price: "$50",
		availability: "White and Black",
		imageSrc:
			"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-07-product-01.jpg",
		imageAlt:
			"White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
	},
	{
		id: 2,
		name: "Zip Tote Basket",
		href: "#",
		price: "$140",
		availability: "Washed Black",
		imageSrc:
			"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-07-product-02.jpg",
		imageAlt:
			"Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
	},
	{
		id: 3,
		name: "Medium Stuff Satchel",
		href: "#",
		price: "$220",
		availability: "Blue",
		imageSrc:
			"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-07-product-03.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
	},
	// More products...
];

export const WithSupportingText = () => {
	return (
		<Box bg="white">
			<Box
				mx={"auto"}
				maxW={"7xl"}
				overflow={"hidden"}
				px={{ base: 4, sm: 6, lg: 8 }}
				py={{ base: 16, sm: 24 }}
			>
				<Grid
					templateColumns={{
						base: "1fr",
						sm: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap={{ base: 6, lg: 8 }}
				>
					<For each={products}>
						{(product) => (
							<LinkBox key={product.id} className="group">
								<Image
									alt={product.imageAlt}
									src={product.imageSrc}
									aspectRatio={1}
									w="full"
									borderRadius="lg"
									bg="gray.100"
									objectFit="cover"
									_groupHover={{ opacity: 0.75 }}
								/>
								<LinkOverlay href={product.href}>
									<Text
										mt={4}
										fontWeight={"medium"}
										color={"gray.900"}
										fontSize={"sm"}
									>
										{product.name}
									</Text>
								</LinkOverlay>
								<Text color={"gray.500"} fontStyle={"italic"} fontSize={"sm"}>
									{product.availability}
								</Text>
								<Text
									mt={2}
									fontWeight={"medium"}
									color={"gray.900"}
									fontSize={"sm"}
								>
									{product.price}
								</Text>
							</LinkBox>
						)}
					</For>
				</Grid>
			</Box>
		</Box>
	);
};
`;
