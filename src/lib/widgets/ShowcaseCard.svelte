<script lang="ts">
	import type { PictureWithLqip } from "$lib/showcase/picture";

	let {
		id,
		name,
		banner,
	}: {
		id: string;
		name: string;
		banner: PictureWithLqip;
	} = $props();
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
		class="banner aspect-[2/1] w-auto rounded-[5px] object-cover text-center
			text-[0px] bg-cover"
		style="background-image: url({banner.lqip
			.lqip}), linear-gradient(to bottom, #525252, #525252);"
		src={banner.src}
		alt="{name} banner"
		draggable="false"
		width="230"
		height="115"
		sizes="460px"
	/>
	<span class="font-sf-pro text-xs font-medium tracking-[-0.1px]">{name}</span>
</a>

<style>
	.banner {
		box-shadow: 0px 0px 0px 0.5px rgb(255, 255, 255, 0.25);
	}
</style>
