import type { Attachment } from "svelte/attachments";
import { getSvgPath } from "figma-squircle";
import { browserSupportsSVG } from "#lib/utils.ts";

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
		const applyClipPath = (width: number, height: number) => {
			const cornerRadiusPx =
				cornerRadius < 1 ? cornerRadius * width : cornerRadius;
			const svgPath = getSvgPath({
				cornerSmoothing,
				cornerRadius: cornerRadiusPx,
				width,
				height,
			});
			element.style.clipPath = `path('${svgPath}')`;
			element.style.setProperty("--squircle-radius", `${cornerRadiusPx}px`);
		};
		const resizeObserver = new ResizeObserver(([entry]) => {
			const [box] = entry.borderBoxSize;
			applyClipPath(box.inlineSize, box.blockSize);
		});
		resizeObserver.observe(element);
		return () => resizeObserver.disconnect();
	};
