import MainComponentBlock from "@/components/MainComponentBlock/MainComponentBlock";
import PageHeading from "@/components/PageHeading/PageHeading";
import { Box } from "@chakra-ui/react";
import WithTieredImages from "./components/withTieredImages/WithTieredImages";
import { withTieredImagesText } from "./components/withTieredImages/WithTieredImagesText";
import WithWideImages from "./components/withWideImages/WithWideImages";
import { withWideImageString } from "./components/withWideImages/withWideImageString";

const ProductFeaturesPage = () => {
	return (
		<Box>
			<PageHeading
				title="Ecommerce"
				subTitle="Product Features"
				description="Components for displaying features of products for your application"
			/>
			<MainComponentBlock
				title="Product Feature with Wide Images"
				codeString={withWideImageString}
				component={<WithWideImages />}
				link="/ecommerce/product-features/with-wide-images"
			/>
			<MainComponentBlock
				title="Product Feature with Tiered Images"
				codeString={withTieredImagesText}
				component={<WithTieredImages />}
				link="/ecommerce/product-features/with-tiered-images"
			/>
		</Box>
	);
};

export default ProductFeaturesPage;
