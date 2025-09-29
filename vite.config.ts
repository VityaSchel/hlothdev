import tailwindcss from "@tailwindcss/vite";
import lqip from "vite-plugin-lqip";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import renderSvgPlugin from "./render-svg-vite-plugin";

export default defineConfig({
	plugins: [
		tailwindcss(),
		lqip(),
		enhancedImages(),
		renderSvgPlugin(),
		sveltekit(),
	],
});
