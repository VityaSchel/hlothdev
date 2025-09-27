import tailwindcss from "@tailwindcss/vite";
import lqip from "vite-plugin-lqip";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [tailwindcss(), lqip(), enhancedImages(), sveltekit()],
});
