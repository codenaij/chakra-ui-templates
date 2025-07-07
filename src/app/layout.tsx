import Navbar from "@/components/Nav/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Provider } from "@/components/ui/provider";
import { Box, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Chakra design Templates",
	description: "Free Chakra UI templates and designs for your projects",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang="en">
			<body className={`${dmSans.className}`}>
				<Provider>
					{/* <LightMode> */}
					<Box>
						<Navbar />
						<Flex flexDir="row" flex={"auto"}>
							<Sidebar />
							<Box
								w={{ base: "100%", md: "calc(100% - 350px)" }}
								minH={"calc(100vh - 80px)"}
								bg={"teal"}
								pt={10}
								px={{ base: 5, md: 20 }}
							>
								{children}
							</Box>
						</Flex>
					</Box>
					{/* </LightMode> */}
				</Provider>
			</body>
		</html>
	);
}
