"use client";

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
import { useRouter } from "next/navigation";
import { LuAlignRight, LuGithub } from "react-icons/lu";
import SidebarMenu from "../Sidebar/SidebarMenu";

const Navbar = () => {
	const router = useRouter();
	return (
		<Flex
			w="100%"
			justify="space-between"
			align="center"
			h="80px"
			px={{ base: 5, md: 20 }}
		>
			<Text
				fontSize={"2xl"}
				fontWeight={"bold"}
				cursor={"pointer"}
				onClick={() => router.push("/")}
			>
				CHAKRA-TEMPLATES
			</Text>
			<Box display={{ base: "none", md: "flex" }} gap={10} alignItems="center">
				<Button variant="underlined">Components</Button>
				<IconButton variant="closeElevated">
					<LuGithub color="white" />
				</IconButton>
				<Button
					variant="elevated"
					onClick={() => router.push("/getting-started/overview")}
				>
					Get Started
				</Button>
			</Box>
			<Drawer.Root placement="start" size={"xs"}>
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
						<Drawer.Content bg={"basic.100"}>
							<Drawer.Header>
								<Drawer.Title>CHAKRA TEMPLATES</Drawer.Title>
							</Drawer.Header>
							<Drawer.Body>
								<SidebarMenu />
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
