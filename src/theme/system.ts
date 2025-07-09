import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./recipies/buttonRecipe";
import { radioGroupSlotRecipe } from "./recipies/radioRecipe";

const config = defineConfig({
	globalCss: {
		"html, body": {
			margin: 0,
			padding: 0,
			boxSizing: "border-box",
			color: "black",
		},
	},

	theme: {
		tokens: {
			colors: {
				blue: { value: "#3300FF" },
				basic: {
					DEFAULT: { value: "#FF0000" },
					100: { value: "#FFF59F" },
				},
				greenT: { value: "#2FFF2F" },
				// red: { value: "#FF4911" },
				red: {
					DEFAULT: { value: "#EE0F0F" },
					100: { value: "#FF4911" },
				},
				purple: { value: "#FF00F5" },
				teal: { value: "#7DF9FF" },
			},
		},
		recipes: {
			button: buttonRecipe,
		},
		slotRecipes: {
			radioGroup: radioGroupSlotRecipe,
		},
	},
});

export const system = createSystem(defaultConfig, config);
