import type { Plugin } from "vite";
import { readFile } from "node:fs/promises";
import { parse } from "node:path";
import sharp from "sharp";

const sourcePath = (id: string) => id.slice(0, id.lastIndexOf("?"));
const readSource = (id: string) => readFile(sourcePath(id));

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
				if (this.environment.mode !== "build")
					return toModule({ width, height, url: toDataUrl(webp) });
				const referenceId = this.emitFile({
					type: "asset",
					name: `${parse(sourcePath(id)).name}.webp`,
					source: webp,
				});
				return {
					code: `export default { width: ${width}, height: ${height}, url: import.meta.ROLLUP_FILE_URL_${referenceId} };`,
					map: null,
					moduleType: "js" as const,
				};
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
