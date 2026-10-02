import type { Plugin } from "vite";
import { readFile } from "node:fs/promises";
import sharp from "sharp";

const readSource = (id: string) => readFile(id.slice(0, id.lastIndexOf("?")));

const toDataUrl = (webp: Buffer) =>
	`data:image/webp;base64,${webp.toString("base64")}`;

const toModule = (value: unknown) => ({
	code: `export default ${JSON.stringify(value)};`,
	map: null,
	moduleType: "js" as const,
});

export function renderSvg(): Plugin {
	return {
		name: "render-svg",
		transform: {
			filter: {
				id: /\.(svelte|svg)\?render$/,
			},
			order: "post",
			async handler(_, id) {
				const svg = sharp(await readSource(id));
				const { width, height } = await svg.metadata();
				const webp = await svg
					.resize({ width: width * 2, height: height * 2 })
					.webp({ quality: 90 })
					.toBuffer();
				return toModule({ width, height, url: toDataUrl(webp) });
			},
		},
	};
}

export function lqip(): Plugin {
	return {
		name: "lqip",
		enforce: "pre",
		load: {
			filter: {
				id: /\?lqip$/,
			},
			async handler(id) {
				const webp = await sharp(await readSource(id))
					.resize({ width: 32, height: 32, fit: "inside", kernel: "cubic" })
					.blur(1.25)
					.webp({ smartSubsample: true })
					.toBuffer();
				return toModule({ lqip: toDataUrl(webp) });
			},
		},
	};
}
