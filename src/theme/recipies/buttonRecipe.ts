import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
	variants: {
		variant: {
			elevated: {
				bg: "teal",
				borderColor: "black",
				borderWidth: "1.5px",
				borderRadius: "0px",
				_hover: {
					boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
				},
			},
			underlined: {
				bg: "transparent",
				border: "none",
				_hover: {
					textDecoration: "underline",
					textUnderlineOffset: "6px",
					// borderBottom: "1px solid",
					// borderColor: "black",
					// borderRadius: "0px",
				},
				_active: {
					textDecoration: "underline",
					textUnderlineOffset: "6px",
				},
			},
		},
	},
});
