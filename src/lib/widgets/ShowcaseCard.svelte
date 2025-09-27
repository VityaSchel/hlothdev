<script lang="ts">
	let {
		id,
		name,
		banner,
	}: {
		id: string;
		name: string;
		banner: {
			src: import("vite-imagetools").Picture;
			lqip: typeof import("*?lqip").default;
		};
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
	data-sveltekit-preload-code="hover"
>
	<enhanced:img
		class="banner aspect-[2/1] h-[115px] w-[230px] rounded-[5px] bg-cover
			object-cover text-center text-[0px]"
		style="background-image: url({banner.lqip
			.lqip}), linear-gradient(to bottom, var(--color-neutral-600), var(--color-neutral-600));"
		src={banner.src}
		alt="{name} banner"
		draggable="false"
		width="460"
		height="230"
		sizes="460px"
	/>
	<span class="font-sf-pro text-xs font-medium tracking-[-0.1px]">{name}</span>
</a>

<style>
	.banner {
		box-shadow: 0px 0px 0px 0.5px rgb(255, 255, 255, 0.25);
	}
</style>
