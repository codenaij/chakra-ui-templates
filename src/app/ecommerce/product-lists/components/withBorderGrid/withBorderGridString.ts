export const withBorderGridString = `
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
		name: "Aloe Vera face mask",
		price: "£149",
		rating: 5,
		reviewCount: 111,
		productImgSrc:
			"https://images.unsplash.com/photo-1596202353035-7fcf1a90094a?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		productImgAlt: "Aloe Vera face mask.",
		href: "#",
	},
	{
		id: 2,
		name: "SK One Toner",
		price: "£15",
		rating: 5,
		reviewCount: 18,
		productImgSrc:
			"https://images.unsplash.com/photo-1738721798337-1c0036181229?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		productImgAlt: "SK one toner.",
		href: "#",
	},
	{
		id: 3,
		name: "Glossier Cleanser",
		price: "£15",
		rating: 4,
		reviewCount: 20,
		productImgSrc:
			"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		productImgAlt: "Glossier milky jelly cleanser conditioning face wash kit.",
		href: "#",
	},
	{
		id: 4,
		name: "Dr Tuna Face Tonic",
		price: "£20",
		rating: 4,
		reviewCount: 21,
		productImgSrc:
			"https://images.unsplash.com/photo-1659785569310-03020ef38b25?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		productImgAlt: "Dr Tuna Face Tonic.",
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
									alt={product.productImgAlt}
									src={product.productImgSrc}
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

`;
