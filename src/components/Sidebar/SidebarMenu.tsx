"use client";

import type { Route } from "@/types/routes.type";
import { Box, Heading } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { MenuItems } from "./routes";

const itemProps = {
	opacity: 1,
	cursor: "pointer",
	display: "block",
	fontSize: "14px",
	overflow: "hidden",
	color: "black",
	_hover: {
		textDecoration: "underline",
		textUnderlineOffset: "6px",
	},
};

interface MainRouteProps {
	route: Route;
}

const ChildRoute = ({
	route,
	path,
}: Readonly<{ route: Route; path: string }>) => {
	const fullPath = `/${path}/${route.href}`;
	const pathname = usePathname();
	const active = pathname.startsWith(fullPath);
	// const drawer = useDrawerContext();

	const handleClick = () => {
		// Close the drawer when a menu item is clicked
		// drawer.setOpen(false);
	};

	return (
		<NextLink href={fullPath}>
			<Box
				{...itemProps}
				h={"30px"}
				fontWeight={active ? 700 : 400}
				paddingLeft={"20px"}
				display={"flex"}
				alignItems={"center"}
				flex={"1 1 0%"}
				mr={"20px"}
				whiteSpace={"nowrap"}
				textDecoration={active ? "underline" : "none"}
				textUnderlineOffset={active ? "6px" : "0px"}
				onClick={handleClick}
			>
				{route.name}
			</Box>
		</NextLink>
	);
};

const MainRoute = ({ route }: Readonly<MainRouteProps>) => {
	const hasChildren = (route.children?.length ?? 0) > 0;
	const pathname = usePathname();

	const isActive =
		route.href === "/"
			? pathname === route.href
			: pathname === `/${route.href}` ||
				(route.children?.some((child) =>
					pathname.startsWith(`/${route.href}/${child.href}`),
				) ??
					false);

	const itemBoxProps = {
		...(isActive ? {} : {}),
	};
	return (
		<Box overflow={"hidden"} as={"li"}>
			<Box
				{...itemBoxProps}
				display={"flex"}
				alignItems={"center"}
				mr={"20px"}
				whiteSpace={"nowrap"}
			>
				<Heading flexGrow={1} fontSize={"15px"} fontWeight={"bold"}>
					{route.name}
				</Heading>
			</Box>
			{hasChildren && (
				<Box as={"ul"} transition={"all 0.5s ease"}>
					{route.children?.map((child) => (
						<ChildRoute
							route={child}
							path={route.href || "/"}
							key={child.name}
						/>
					))}
				</Box>
			)}
		</Box>
	);
};

const SidebarMenu = () => {
	const pathname = usePathname();

	return (
		<Box m={0} listStyleType={"none"} p={0} as={"ul"}>
			{MenuItems.map((route) => {
				return <MainRoute route={route} key={route.name} />;
			})}
		</Box>
	);
};

export default SidebarMenu;
