<script lang="ts">
	import type { ShowcaseItem } from "$lib/showcase/items";

	let { id, name, banner }: Pick<ShowcaseItem, "id" | "name" | "banner"> =
		$props();
</script>

<a
	href="/showcase/{id}"
	class="showcase-view-transition flex shrink-0 cursor-default flex-col
		items-center gap-[6px] select-none focus:outline-0
		focus-visible:bg-stone-600/50 focus-visible:outline-[8px]
		focus-visible:outline-stone-600/50"
	draggable="false"
	style:view-transition-name="showcase-{id}"
>
	<enhanced:img
		class="banner aspect-2/1 h-[115px] w-[230px] rounded-[5px] bg-neutral-600
			bg-cover object-cover text-center text-[0px]"
		style="background-image: url({banner.lqip.lqip})"
		src={banner.src}
		alt="{name} banner"
		draggable="false"
		width="460"
		height="230"
		sizes="230px"
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
