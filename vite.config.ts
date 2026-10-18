import adapter from "@sveltejs/adapter-node";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { execSync } from "node:child_process";
import { defineConfig } from "vite";
import { lqip, renderSvg } from "./image-vite-plugins.ts";

export default defineConfig({
	plugins: [
		tailwindcss(),
		lqip(),
		enhancedImages(),
		renderSvg(),
		sveltekit({
			compilerOptions: {
				discloseVersion: false,
			},
			version: {
				name:
					process.env.HLOTH_BUILD_COMMIT ??
					execSync("git rev-parse HEAD").toString().trim(),
			},
			adapter: adapter(),
			csrf: {
				trustedOrigins: [
					"https://hloth.dev",
					"http://hlothdevzkti6suoksy7lcy7hmpxnr3msu5waokzaslsi2mnx5ouu4qd.onion",
				],
			},
		}),
	],
});
