import MainComponentBlock from "@/components/MainComponentBlock/MainComponentBlock";
import PageHeading from "@/components/PageHeading/PageHeading";
import { Box } from "@chakra-ui/react";
import SidebarFilter from "./component/sidebarFilter/SidebarFilter";

const CategoryFiltersPage = () => {
	return (
		<Box>
			<PageHeading
				title="Ecommerce"
				subTitle="Category Filters"
				description="Components for displaying a category filter for your application"
			/>
			<MainComponentBlock
				title="Sidebar Category Filter"
				codeString={`<Box>
					<Text>Category Filters</Text>
				</Box>`}
				component={<SidebarFilter />}
			/>
		</Box>
	);
};

export default CategoryFiltersPage;
