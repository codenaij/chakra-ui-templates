"use client";

import { Box } from "@chakra-ui/react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
	return (
		<Box
			display={{ base: "none", md: "block" }}
			h={"100%"}
			w={"350px"}
			overflowY={"auto"}
			bg={"basic.100"}
			pt={10}
			px={20}
		>
			<SidebarMenu />
		</Box>
	);
};

export default Sidebar;
