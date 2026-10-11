<script lang="ts">
	import type { ShowcaseCardData } from "#lib/showcase/cards.ts";
	import { morphName } from "#lib/view-transition.svelte.ts";
	import type { Attachment } from "svelte/attachments";

	let {
		id,
		name,
		banner,
		lazy = false,
	}: ShowcaseCardData & { lazy?: boolean } = $props();

	const loadAhead: Attachment<HTMLImageElement> = (img) => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				img.loading = "eager";
				observer.disconnect();
			},
			{ root: img.closest("a")?.parentElement, rootMargin: "0px 720px" },
		);
		observer.observe(img);
		return () => observer.disconnect();
	};
</script>

<a
	href="/showcase/{id}"
	class="flex shrink-0 cursor-default flex-col items-center gap-[6px]
		select-none focus:outline-0 focus-visible:bg-stone-600/50
		focus-visible:outline-[8px] focus-visible:outline-stone-600/50"
	draggable="false"
>
	<enhanced:img
		class="banner showcase-view-transition aspect-2/1 h-[115px] w-[230px]
			rounded-[5px] bg-neutral-600 bg-cover object-cover"
		style="background-image: url({banner.lqip.lqip})"
		style:--morph-name="showcase-{id}"
		style:view-transition-name={morphName(`showcase-${id}`)}
		src={banner.src}
		alt="{name} banner"
		draggable="false"
		width="460"
		height="230"
		sizes="230px"
		loading={lazy ? "lazy" : "eager"}
		{@attach lazy && loadAhead}
	/>
	<span class="text-center font-sf-pro text-xs font-medium tracking-[-0.1px]"
		>{name}</span
	>
</a>

<style>
	.banner {
		box-shadow: 0px 0px 0px 0.5px rgb(255, 255, 255, 0.25);
	}
</style>
