import MainComponentBlock from "@/components/MainComponentBlock/MainComponentBlock";
import PageHeading from "@/components/PageHeading/PageHeading";
import { Box } from "@chakra-ui/react";
import HalfImage from "./components/halfImage/HalfImage";
import { halfImageString } from "./components/halfImage/halfImageString";

const ProductOverviewsPage = () => {
  return (
    <Box>
      <PageHeading
        title="Ecommerce"
        subTitle="Product Detail"
        description="Components for displaying a product overview for your application"
      />
      <MainComponentBlock
        title="Basic Product Detail"
        codeString={halfImageString}
        component={<HalfImage />}
      />
    </Box>
  );
};

export default ProductOverviewsPage;
