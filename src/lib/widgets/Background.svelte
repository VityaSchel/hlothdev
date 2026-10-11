<script lang="ts">
	import { page } from "$app/state";
	import bgLqip from "#lib/assets/sonoma-video-banner.webp?lqip";
	import hevcVideo from "#lib/assets/video/sonoma-hvc1-1080p-24fps-sdr-327kbps.mp4";
	import av1Video from "#lib/assets/video/sonoma-av1-1080p-24fps-sdr-444kbps.webm";
	import { isOnion } from "#lib/utils.ts";
	import { onMount } from "svelte";
	import { on } from "svelte/events";

	let {
		children,
	}: {
		children: import("svelte").Snippet;
	} = $props();

	let connectionSaveData = $state(false);
	onMount(() => {
		const { connection } = navigator;
		if (!connection) return;
		const update = () => {
			connectionSaveData = connection.saveData ?? false;
		};
		update();
		return on(connection, "change", update);
	});

	const saveData = $derived(page.data.saveData || connectionSaveData);
</script>

<div
	class="page-background fixed top-0 left-0 w-full select-none"
	aria-hidden="true"
>
	<enhanced:img
		class="absolute top-0 left-0 size-full bg-[#1c330c] object-cover"
		src="#lib/assets/sonoma-video-banner.webp?quality=50"
		style="background-image: url('{bgLqip.lqip}'); background-size: cover;"
		width="3840"
		height="2160"
		sizes="max(100vw, 177.77vh)"
		alt="Background image"
		aria-hidden="true"
		loading="lazy"
	/>
	{#if !saveData && !isOnion()}
		<video
			muted
			autoplay
			playsinline
			disablepictureinpicture
			disableremoteplayback
			class="s v a g a svaga i have it navalom absolute top-0 left-0 z-[1]
				h-full w-full object-cover object-center motion-reduce:hidden"
			loop
		>
			<source src={hevcVideo} type="video/mp4; codecs=hvc1" />
			<source src={hevcVideo} type="video/mp4; codecs=hev1.1.6.L93.B0" />
			<source src={av1Video} type="video/webm; codecs=av01.0.05M.08" />
		</video>
	{/if}
</div>

<div
	class="page-container no-py-when-short relative flex w-full flex-col
		items-center justify-center gap-[2px] overflow-clip p-3 pb-2 font-sf-pro
		md:p-8 md:pb-5"
>
	{@render children()}
</div>

<style>
	.page-container {
		height: 100vh;
	}
	@supports (height: 100dvh) {
		.page-container {
			height: 100dvh;
		}
	}
	@media (max-height: 250px) {
		.no-py-when-short {
			padding-top: 0;
			padding-bottom: 0;
		}
	}
	.page-background {
		height: 100vh;
	}
	@supports (height: 100lvh) {
		.page-background {
			height: 100lvh;
		}
	}
	video.s.v.a.g.a.svaga.i.have.it.navalom {
		/* gaslighting Firefox to force it to blur backdrop on top of video */
		clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
	}
</style>
