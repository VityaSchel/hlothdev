<script lang="ts">
	import bgLqip from "$lib/assets/sonoma-video-banner.webp?lqip";

	let {
		children,
	}: {
		children: import("svelte").Snippet;
	} = $props();
</script>

<div
	class="page-background fixed top-0 left-0 w-full select-none"
	aria-hidden="true"
>
	<enhanced:img
		class="absolute top-0 left-0 h-full w-full bg-cover object-cover text-[0px]"
		src="$lib/assets/sonoma-video-banner.webp?quality=100"
		style="background-image: url('{bgLqip.lqip}'), linear-gradient(to bottom, #1c330c, #1c330c);"
		width="3840"
		height="2160"
		alt="Background image"
		aria-hidden="true"
		loading="lazy"
	/>
	<video
		src="/sonoma-av1-1080p-24fps-sdr.webm"
		muted
		autoplay
		playsinline
		class="mask test s v a g a svaga i have it navalom absolute top-0 left-0
			z-[1] h-full w-full object-cover object-center"
		loop
	></video>
</div>
<div
	class="page-container no-py-when-short relative flex w-full flex-col
		items-center justify-center gap-[2px] overflow-hidden p-3 pb-2 font-sf-pro
		md:p-8 md:pb-5"
>
	{@render children()}
</div>

<style lang="scss">
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
		// gaslighting Firefox to force it to blur backdrop on top of video
		clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
	}
</style>
