<script lang="ts">
	import { browser } from "$app/environment";
	import { transition } from "$lib/utils";
	import { getSvgPath } from "figma-squircle";
	import { onMount } from "svelte";
	import { images } from "./favorite-things";

	let width = $state(0);
	let height = $state(0);
	let clipPath = $derived.by(() => {
		if (!width || !height) return "";
		return getSvgPath({
			cornerSmoothing: 0.6,
			cornerRadius: 0.125984252 * width,
			width,
			height,
		});
	});

	const clipPathStyle = $derived(
		clipPath ? `clip-path: path('${clipPath}')` : undefined,
	);

	let scroll = $state(0);
	let scrollContainer: HTMLDivElement;
	onMount(() => (scroll = scrollContainer.scrollLeft));
	let cardInViewport = $derived(scroll / (width + 1));

	let touch = $state(false);
	let touchEndTimer: ReturnType<typeof setTimeout> | null = $state(null);
</script>

<div
	class="container-size col-start-1 col-end-3 row-start-13 row-end-14 text-white
		select-none px580:row-start-6 px580:row-end-7 md:col-start-3 md:col-end-5
		md:row-start-5 md:row-end-6 px1180:col-start-9 px1180:col-end-11
		px1180:row-start-2 px1180:row-end-3"
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<div
		class="group relative h-full w-full overflow-clip rounded-[12.59cqw]
			has-focus-visible:outline-3 has-focus-visible:outline-offset-6
			has-focus-visible:outline-stone-200/40"
		ontouchstartcapture={() => {
			if (touchEndTimer) {
				clearTimeout(touchEndTimer);
			}
			touch = true;
			const onTouchEnd = () => {
				touchEndTimer = setTimeout(() => {
					touch = false;
				}, 1000);
				window.removeEventListener("touchend", onTouchEnd);
				window.removeEventListener("touchcancel", onTouchEnd);
			};
			window.addEventListener("touchend", onTouchEnd, { once: true });
			window.addEventListener("touchcancel", onTouchEnd, { once: true });
		}}
	>
		<div
			class="scrollbar-invisible absolute top-0 left-0 flex h-full w-full snap-x
				snap-mandatory gap-px overflow-auto"
			bind:this={scrollContainer}
			onscroll={() => (scroll = scrollContainer.scrollLeft)}
			tabindex="0"
			role="listbox"
			aria-roledescription="My favorite things"
			style={clipPathStyle}
		>
			{#each images as { img: { src, lqip }, alt, href }, i (i)}
				<svelte:element
					this={href ? "a" : "div"}
					rel={href ? "noopener noreferrer" : undefined}
					target={href ? "_blank" : undefined}
					class="animate-scroll h-full w-full shrink-0 cursor-default snap-center overflow-clip rounded-[12.59cqw]"
					style={clipPathStyle}
					role="listitem"
					{href}
				>
					<enhanced:img
						{src}
						{alt}
						class="h-[123px] w-[254px] shrink-0 rounded-[12.59cqw] bg-cover object-cover indent-[8cqw] text-[6.22cqw]"
						style="background-image: url({lqip.lqip}), linear-gradient(to top, var(--color-neutral-600), var(--color-neutral-600)); {clipPathStyle}"
						draggable="false"
						width="508"
						height="246"
					/>
				</svelte:element>
			{/each}
		</div>
		{#if browser}
			<div
				class={[
					`
            pointer-events-none absolute bottom-[1.96cqw] z-[1] flex h-[0.78cqw]
            w-full items-center justify-center gap-[0.78cqw] transition-opacity
            duration-300
            group-hover:opacity-100
            group-has-focus-visible:opacity-100
          `,
					{
						"opacity-0": !touch,
						"opacity-100": touch,
					},
				]}
			>
				{#each images, i}
					<span
						class="h-[0.78cqw] w-[0.78cqw] rounded-full backdrop-blur-3xl"
						style="background-color: rgba(246, 246, 246, {transition(
							0.3,
							0.72,
							Math.max(0, 1 - Math.abs(cardInViewport - i)),
						)})"
					></span>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.scrollbar-invisible {
		scrollbar-width: none;
	}
	@supports (animation-timeline: view(x)) {
		.animate-scroll {
			animation-timeline: view(x);
			view-timeline-name: --timeline_name;
			view-timeline-axis: x;

			img {
				animation-timeline: --timeline_name;
				view-timeline-axis: x;
				animation-name: appear;
				animation-direction: alternate;
				animation-fill-mode: both;
				animation-duration: 1ms;
			}
		}
		@keyframes appear {
			0% {
				transform: scale(0.85);
			}

			50% {
				transform: scale(1);
			}

			100% {
				transform: scale(0.85);
			}
		}
	}
</style>
