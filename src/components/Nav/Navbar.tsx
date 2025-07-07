import {
	Box,
	Button,
	CloseButton,
	Drawer,
	Flex,
	IconButton,
	Portal,
	Text,
} from "@chakra-ui/react";
import { LuAlignRight } from "react-icons/lu";

const Navbar = () => {
	return (
		<Flex
			w="100%"
			justify="space-between"
			align="center"
			h="80px"
			// bg="red.100"
			px={{ base: 5, md: 20 }}
		>
			<Text fontSize={"2xl"} fontWeight={"bold"}>
				CHAKRA-TEMPLATES
			</Text>
			<Box display={{ base: "none", md: "flex" }} gap={10} alignItems="center">
				<Button variant="underlined">Components</Button>
				<Text>Templates</Text>
				<Button variant="elevated">Get Started</Button>
			</Box>
			<Drawer.Root placement="start" size={"md"}>
				<Drawer.Trigger asChild>
					<Box display={{ base: "block", md: "none" }}>
						<IconButton aria-label="Toggle sidebar" variant="elevated">
							<LuAlignRight />
						</IconButton>
					</Box>
				</Drawer.Trigger>
				<Portal>
					<Drawer.Backdrop />
					<Drawer.Positioner>
						<Drawer.Content>
							<Drawer.Header>
								<Drawer.Title>Drawer Title</Drawer.Title>
							</Drawer.Header>
							<Drawer.Body>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</Drawer.Body>

							<Drawer.CloseTrigger asChild>
								<CloseButton size="sm" variant="closeElevated" />
							</Drawer.CloseTrigger>
						</Drawer.Content>
					</Drawer.Positioner>
				</Portal>
			</Drawer.Root>
		</Flex>
	);
};

export default Navbar;
