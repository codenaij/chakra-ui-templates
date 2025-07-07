import { Button, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
	return (
		<Flex
			w="100%"
			justify="space-between"
			align="center"
			h="80px"
			// bg="red.100"
			px={20}
		>
			<Text>CHAKRA-TEMPLATES</Text>
			<Flex gap={10} align="center">
				<Button variant="underlined">Components</Button>
				<Text>Templates</Text>
				<Button variant="elevated">Get Started</Button>
			</Flex>
		</Flex>
	);
};

export default Navbar;
