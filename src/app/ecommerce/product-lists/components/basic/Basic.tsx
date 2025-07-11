import {
	Box,
	For,
	Grid,
	Image,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/react";

const Basic = () => {
	const products = [
		{
			id: 1,
			name: "Iphone 13",
			href: "#",
			price: "£300",
			productImgSrc:
				"https://images.unsplash.com/photo-1680337673571-e194b42583ab?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			productImgAlt: "A blue iphone 13 beside a yellow apple",
		},
		{
			id: 2,
			name: "Glossier Cleanser",
			href: "#",
			price: "£25",
			productImgSrc:
				"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			productImgAlt:
				"Glossier milky jelly cleanser conditioning face wash kit.",
		},
		{
			id: 3,
			name: "Rayban Sunglasses",
			href: "#",
			price: "£100",
			productImgSrc:
				"https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			productImgAlt: "Rayban Non-Prescription Sunglasses.",
		},
		{
			id: 4,
			name: "Ladies Floral Shoes",
			href: "#",
			price: "£35",
			productImgSrc:
				"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			productImgAlt: "Blue, yellow and red ladies floral shoes.",
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
									src={product.productImgSrc}
									alt={product.productImgAlt}
									objectFit={"cover"}
									_groupHover={{ opacity: 0.75 }}
									bg={"gray.200"}
									borderRadius={"lg"}
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

export default Basic;
