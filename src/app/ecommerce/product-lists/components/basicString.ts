export const basicString = `
import { Box, For, Grid, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
	const Basic = () => {
		const products = [
			{
				id: 1,
				name: "Earthen Bottle",
				href: "#",
				price: "$48",
				imageSrc:
					"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
				imageAlt:
					"Tall slender porcelain bottle with natural clay textured body and cork stopper.",
			},
			{
				id: 2,
				name: "Nomad Tumbler",
				href: "#",
				price: "$35",
				imageSrc:
					"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
				imageAlt:
					"Olive drab green insulated bottle with flared screw lid and flat top.",
			},
			{
				id: 3,
				name: "Focus Paper Refill",
				href: "#",
				price: "$89",
				imageSrc:
					"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
				imageAlt:
					"Person using a pen to cross a task off a productivity paper card.",
			},
			{
				id: 4,
				name: "Machined Mechanical Pencil",
				href: "#",
				price: "$35",
				imageSrc:
					"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
				imageAlt:
					"Hand holding black machined steel mechanical pencil with brass tip and top.",
			},
			// More products...
		];

	return (
		<Box bg="white">
			<Box
				mx={"auto"}
				maxW={{ base: "2xl", lg: "7xl" }}
				px={{ base: 4, sm: 6, lg: 8 }}
				py={{ base: 16, sm: 24 }}
			>
				<Text srOnly>Products</Text>

				<Grid
					gridTemplateColumns={{
						base: "1fr",
						sm: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
						xl: "repeat(4, 1fr)",
					}}
					gapX={{ base: 6, xl: 8 }}
					gapY={10}
				>
					<For each={products}>
						{(product) => (
							<LinkBox key={product.id} className={"group"}>
								<Image
									src={product.imageSrc}
									alt={product.imageAlt}
									objectFit={"cover"}
									_groupHover={{ opacity: 0.75 }}
									w={"full"}
									aspectRatio={{ base: 1, xl: 7 / 8 }}
								/>

								<Text fontSize={"md"} mt={4} color={"gray.700"}>
									<LinkOverlay href="#">{product.name}</LinkOverlay>
								</Text>
								<Text
									mt={1}
									fontSize={"md"}
									fontWeight={"medium"}
									color={"gray.900"}
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
