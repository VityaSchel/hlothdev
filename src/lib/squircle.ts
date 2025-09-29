import type { Attachment } from "svelte/attachments";
import { getSvgPath } from "figma-squircle";
import { browserSupportsSVG } from "$lib/utils";

export const squircle =
	({
		cornerSmoothing,
		cornerRadius,
	}: {
		cornerSmoothing: number;
		cornerRadius: number;
	}): Attachment =>
	(element: Element) => {
		if (!(element instanceof HTMLElement)) {
			throw new Error("squircle attachment can only be used on HTMLElement");
		}
		if (!browserSupportsSVG()) return;
		const onResize = () => {
			const width = element.offsetWidth;
			const height = element.offsetHeight;
			const cornerRadiusPx =
				cornerRadius < 1 ? cornerRadius * width : cornerRadius;
			const svgPath = getSvgPath({
				cornerSmoothing,
				cornerRadius: cornerRadiusPx,
				width,
				height,
			});
			element.style.clipPath = `path('${svgPath}')`;
		};
		onResize();
		const resizeObserver = new ResizeObserver(onResize);
		resizeObserver.observe(element);
		return () => resizeObserver.disconnect();
	};
