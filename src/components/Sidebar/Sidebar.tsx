"use client";

import { Box, useDisclosure } from "@chakra-ui/react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
	const { open, onToggle } = useDisclosure({ defaultOpen: true });
	return (
		<Box
			display={{ base: "none", md: "block" }}
			h={"calc(100vh - 80px)"}
			w={"350px"}
			bg={"basic.100"}
			pt={10}
			px={20}
			overflow={"hidden"}
		>
			<SidebarMenu />
		</Box>
	);
};

export default Sidebar;
