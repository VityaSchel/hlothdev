import type { Plugin } from "vite";
import fs from "fs/promises";
import sharp from "sharp";

function renderSvgPlugin(): Plugin {
	return {
		name: "render-svg",
		transform: {
			filter: {
				id: /\.(svelte|svg)\?render$/,
			},
			order: "post",
			async handler(_, id) {
				const [filePath] = id.split("?");
				const svg = await sharp(await fs.readFile(filePath));
				const metadata = await svg.metadata();
				const webp = await svg
					.resize({
						width: metadata.width * 2,
						height: metadata.height * 2,
					})
					.webp({ quality: 90 })
					.toBuffer();
				const dataUrl = `data:image/webp;base64,${webp.toString("base64")}`;
				return {
					code: `export default ${JSON.stringify({
						width: metadata.width,
						height: metadata.height,
						url: dataUrl,
					})};`,
					map: null,
				};
			},
		},
	};
}

export default renderSvgPlugin;
