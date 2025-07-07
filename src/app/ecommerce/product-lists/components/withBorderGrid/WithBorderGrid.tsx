import {
	Box,
	Flex,
	For,
	Grid,
	Icon,
	Image,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/react";
import { LuStar } from "react-icons/lu";

const products = [
	{
		id: 1,
		name: "Organize Basic Set (Walnut)",
		price: "$149",
		rating: 5,
		reviewCount: 38,
		imageSrc:
			"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-05-image-card-01.jpg",
		imageAlt: "TODO",
		href: "#",
	},
	{
		id: 2,
		name: "Organize Pen Holder",
		price: "$15",
		rating: 5,
		reviewCount: 18,
		imageSrc:
			"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-05-image-card-02.jpg",
		imageAlt: "TODO",
		href: "#",
	},
	{
		id: 3,
		name: "Organize Sticky Note Holder",
		price: "$15",
		rating: 5,
		reviewCount: 14,
		imageSrc:
			"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-05-image-card-03.jpg",
		imageAlt: "TODO",
		href: "#",
	},
	{
		id: 4,
		name: "Organize Phone Holder",
		price: "$15",
		rating: 4,
		reviewCount: 21,
		imageSrc:
			"https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-05-image-card-04.jpg",
		imageAlt: "TODO",
		href: "#",
	},
	// More products...
];

const WithBorderGrid = () => {
	return (
		<Box bg={"white"}>
			<Box mx={"auto"} maxW={"7xl"} overflow={"hidden"} px={{ sm: 6, lg: 8 }}>
				<Text srOnly>Products</Text>

				<Grid
					gridTemplateColumns={{
						base: "repeat(2, 1fr)",
						md: "repeat(3, 1fr)",
						lg: "repeat(4, 1fr)",
					}}
					mx={{ base: "-1px", sm: 0 }}
					borderLeft={"1px solid"}
					borderColor={"gray.200"}
				>
					<For each={products}>
						{(product) => (
							<LinkBox
								key={product.id}
								className="group"
								borderRight={"1px solid"}
								borderBottom={"1px solid"}
								borderColor={"gray.200"}
								position={"relative"}
								p={{ base: 4, sm: 6 }}
							>
								<Image
									alt={product.imageAlt}
									src={product.imageSrc}
									objectFit={"cover"}
									_groupHover={{ opacity: 0.75 }}
									bg={"gray.200"}
									borderRadius={"lg"}
								/>
								<Box pt={10} pb={4} textAlign={"center"}>
									<LinkOverlay href={product.href}>
										<Text
											fontSize={"sm"}
											fontWeight={"medium"}
											color={"gray.900"}
										>
											{product.name}
										</Text>
									</LinkOverlay>
									<Flex flexDir={"column"} align={"center"} mt={3}>
										<Text srOnly>{product.rating} out of 5 stars</Text>
										<Flex align={"center"} flexShrink={0}>
											{[0, 1, 2, 3, 4].map((rating) => (
												<Icon
													as={LuStar}
													key={rating}
													aria-hidden="true"
													boxSize={5}
													color={
														product.rating > rating ? "yellow.400" : "gray.200"
													}
													flexShrink={0}
												/>
											))}
										</Flex>
										<Text fontSize={"sm"} color={"gray.500"} mt={1}>
											{product.reviewCount} reviews
										</Text>
									</Flex>
									<Text
										mt={4}
										fontWeight={"medium"}
										color={"gray.900"}
										fontSize={"md"}
									>
										{product.price}
									</Text>
								</Box>
							</LinkBox>
						)}
					</For>
				</Grid>
			</Box>
		</Box>
	);
};

export default WithBorderGrid;
