import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { clearnetDomain, torDomain } from "./src/lib/utils";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$showcase: "src/lib/assets/showcase",
		},
		csrf: {
			trustedOrigins: ["https://" + clearnetDomain, "http://" + torDomain],
		},
	},
};

export default config;
