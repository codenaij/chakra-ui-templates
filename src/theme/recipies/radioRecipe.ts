import { defineSlotRecipe } from "@chakra-ui/react";
import { radioGroupAnatomy } from "@chakra-ui/react/anatomy";

const variants = {
	roundedLightOutlineBrand: {
		root: {
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: "black",
			padding: "2px",
			borderRadius: "6px",
		},
		item: {
			justifyContent: "center",
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: "transparent",
			padding: "6px 10px",
			width: "50%",
			color: "black",
			_checked: {
				width: "50%",
				borderRadius: "6px",
				background: "teal",
				borderColor: "black",
				borderWidth: "1px",
				zIndex: "100",
				_hover: {
					backgroundColor: "teal",
				},
				_disabled: {
					background: "gray.130",
					borderColor: "gray.350",
				},
			},
			_hover: {
				cursor: "pointer",
				backgroundColor: "teal",
				borderRadius: "6px",
			},
		},
		itemControl: {
			display: "none",
		},
		itemText: {
			color: "gray.450",
			fontSize: "sm",
			_checked: {
				color: "brand.600",
			},
			_hover: {
				color: "brand.600",
			},
		},
	},
};

export const radioGroupSlotRecipe = defineSlotRecipe({
	slots: radioGroupAnatomy.keys(),
	base: {
		root: {
			minWidth: "auto",
		},
		itemText: {
			color: "blackAlpha.850",
			fontSize: "sm",
		},
	},
	variants: {
		variant: variants,
	},
});
