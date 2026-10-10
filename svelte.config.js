import adapter from "@sveltejs/adapter-node";
import { execSync } from "node:child_process";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		discloseVersion: false,
	},
	kit: {
		version: {
			name: execSync("git rev-parse HEAD").toString().trim(),
		},
		adapter: adapter(),
		alias: {
			$showcase: "src/lib/assets/showcase",
		},
		csrf: {
			trustedOrigins: [
				"https://hloth.dev",
				"http://hlothdevzkti6suoksy7lcy7hmpxnr3msu5waokzaslsi2mnx5ouu4qd.onion",
			],
		},
	},
};

export default config;
