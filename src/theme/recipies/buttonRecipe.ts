import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
	variants: {
		variant: {
			elevated: {
				bg: "teal",
				borderColor: "black",
				borderWidth: "1.5px",
				borderRadius: "0px",
				color: "gray.900",
				_hover: {
					boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
				},
			},
			closeElevated: {
				bg: "purple",
				borderColor: "black",
				borderWidth: "1.5px",
				borderRadius: "5px",
				_hover: {
					boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
				},
			},
			underlined: {
				bg: "transparent",
				border: "none",
				color: "gray.900",
				_hover: {
					textDecoration: "underline",
					textUnderlineOffset: "6px",
				},
				_active: {
					textDecoration: "underline",
					textUnderlineOffset: "6px",
				},
			},
		},
	},
});
