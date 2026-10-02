import tailwindcss from "@tailwindcss/vite";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { lqip, renderSvg } from "./image-vite-plugins.ts";

export default defineConfig({
	plugins: [tailwindcss(), lqip(), enhancedImages(), renderSvg(), sveltekit()],
});
