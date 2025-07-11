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
		name: "Iphone 15 Pro Max",
		stock: 12,
		price: "£300",
		href: "#",
		productImgSrc:
			"https://images.unsplash.com/photo-1680337673571-e194b42583ab?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		productImgAlt: "A blue iphone sitting next to a yellow apple.",
	},
	{
		id: 2,
		name: "Ladies Floral Shoes",
		href: "#",
		price: "£35",
		stock: 10,
		productImgSrc:
			"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		productImgAlt: "Blue, yellow and red ladies floral shoes.",
	},
	{
		id: 3,
		name: "Puma Sneakers",
		href: "#",
		price: "£35",
		stock: 15,
		productImgSrc:
			"https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		productImgAlt: "Puma Sneakers.",
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
									alt={product.productImgAlt}
									src={product.productImgSrc}
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
									{product.stock} in stock
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
