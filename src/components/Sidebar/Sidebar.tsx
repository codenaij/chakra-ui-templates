import { Box } from "@chakra-ui/react";

const Sidebar = () => {
	return (
		<Box
			h={"calc(100vh - 60px)"}
			w={"20%"}
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
