"use client";

import MainComponentBlock from "@/components/MainComponentBlock/MainComponentBlock";
import PageHeading from "@/components/PageHeading/PageHeading";
import { Box } from "@chakra-ui/react";
import Basic from "./components/basic/Basic";
import { basicString } from "./components/basic/basicString";
import WithBorderGrid from "./components/withBorderGrid/WithBorderGrid";
import { withBorderGridString } from "./components/withBorderGrid/withBorderGridString";
import WithCtaLink from "./components/withCtaLink/WithCtaLink";
import { withCtaLinkString } from "./components/withCtaLink/withCtaLinkString";
import { WithSupportingText } from "./components/withSupportingText/WithSupportingText";
import { withSupportingTextString } from "./components/withSupportingText/WithSupportingTextString";

const ProductListsPage = () => {
	return (
		<Box>
			<PageHeading
				title="Ecommerce"
				subTitle="Product Lists"
				description="Components for displaying a list of products for your application"
			/>
			<MainComponentBlock
				title="Basic Product List"
				codeString={basicString}
				component={<Basic />}
			/>
			<MainComponentBlock
				title="Product List with Border Grid"
				codeString={withBorderGridString}
				component={<WithBorderGrid />}
			/>
			<MainComponentBlock
				title="Product List with CTA Link"
				codeString={withCtaLinkString}
				component={<WithCtaLink />}
			/>
			<MainComponentBlock
				title="Product List with Supporting Text"
				codeString={withSupportingTextString}
				component={<WithSupportingText />}
			/>
		</Box>
	);
};

export default ProductListsPage;
