import { Box } from "@chakra-ui/react";

const Sidebar = () => {
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
			Sidebar
		</Box>
	);
};

export default Sidebar;
