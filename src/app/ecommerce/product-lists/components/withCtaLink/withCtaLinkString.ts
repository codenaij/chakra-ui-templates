export const withCtaLinkString = `
import { Box, Grid, Icon, Image, Link, Text } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";

const products = [
	{
		id: 1,
		name: "Iphone 15 Pro Max",
		color: "Blue",
		price: "$100",
		href: "#",
		imageSrc:
			"https://images.unsplash.com/photo-1680337673571-e194b42583ab?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		imageAlt: "A blue iphone sitting next to a yellow apple.",
	},
	// More products...
];

const WithCtaLink = () => {
	return (
		<Box bg={"white"}>
			<Box
				mx={"auto"}
				maxW={{ base: "2xl", lg: "7xl" }}
				px={{ base: 4, sm: 6, lg: 8 }}
				py={{ base: 16, sm: 24 }}
			>
				<Box
					display={{ base: "block", md: "flex" }}
					justifyContent={{ md: "space-between" }}
					alignItems={{ md: "center" }}
				>
					<Text
						fontSize="2xl"
						fontWeight="bold"
						letterSpacing="tight"
						color="gray.900"
					>
						Trending products
					</Text>
					<Link
						href="#"
						display={{ base: "none", md: "block" }}
						fontSize="sm"
						fontWeight="medium"
						color="indigo.600"
						_hover={{ color: "indigo.500" }}
						cursor="pointer"
					>
						Shop the collection
						<Icon as={LuArrowRight} boxSize={4} />
					</Link>
				</Box>

				<Grid
					mt={6}
					templateColumns={{
						base: "repeat(2, 1fr)",
						md: "repeat(4, 1fr)",
					}}
					columnGap={{
						base: 4,
						sm: 6,
						lg: 8,
					}}
					rowGap={{
						base: 10,
						md: 0,
					}}
				>
					{products.map((product) => (
						<Box key={product.id} className="group" pos={"relative"}>
							<Box
								h={{ base: "56", lg: "72", xl: "80" }}
								w="full"
								overflow="hidden"
								borderRadius="md"
								bg="gray.200"
								_groupHover={{ opacity: 0.75 }}
							>
								<Image
									alt={product.imageAlt}
									src={product.imageSrc}
									objectFit="cover"
									width="100%"
									height="100%"
								/>
							</Box>
							<Link href={product.href}>
								<Box pos="absolute" inset={0} />
								<Text mt={4} fontSize="sm" color="gray.700">
									{product.name}
								</Text>
							</Link>
							<Text mt={1} fontSize="sm" color="gray.500">
								{product.color}
							</Text>
							<Text mt={1} fontSize="sm" fontWeight="medium" color="gray.900">
								{product.price}
							</Text>
						</Box>
					))}
				</Grid>

				<Box mt={8} display={{ base: "block", md: "none" }}>
					<Link
						href="#"
						fontSize="sm"
						fontWeight="medium"
						color="indigo.600"
						_hover={{ color: "indigo.500" }}
						cursor="pointer"
					>
						Shop the collection
						<Icon as={LuArrowRight} boxSize={4} />
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default WithCtaLink;
`;
