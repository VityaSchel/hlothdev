<script lang="ts" module>
	export type SelectedNavItem = {
		element: HTMLElement;
		name: string;
		x: number;
		y: number;
	};
</script>

<script lang="ts">
	import { browser } from "$app/env";

	let {
		icon,
		highlight,
		name,
		alt,
		class: className,
		link,
		selectedNavItem = $bindable(),
	}: {
		icon: string;
		name: string;
		highlight?: boolean;
		link: string;
		alt: string;
		class?: import("svelte/elements").ClassValue;
		selectedNavItem: SelectedNavItem | null;
	} = $props();

	// JS ONLY:
	// There is no way to differentiate between a pressed state and drag in CSS with :active pseudoclass
	let pressed = $state(false);
	let showHighlight = $state(true);

	let a: HTMLAnchorElement;

	const setTooltip = () => {
		const rect = a.getBoundingClientRect();
		selectedNavItem = {
			element: a,
			name,
			x: rect.left + rect.width / 2,
			y: rect.top - 20,
		};
	};

	let dragging = $state(false);
</script>

<svelte:window
	onresize={() => selectedNavItem?.element === a && setTooltip()}
/>

<a
	href={link}
	rel="nofollow noopener noreferrer"
	target="_blank"
	class={[
		` nav-item group flex shrink-0 cursor-default flex-col items-center
		gap-[3px] self-stretch pt-[5px] pb-[3px] focus-sm select-none `,
		className,
	]}
	onpointerenter={() => {
		if (!dragging) {
			setTooltip();
		}
	}}
	onpointerdown={() => {
		pressed = true;
		const onPointerUp = () => {
			pressed = false;
			selectedNavItem = null;
			window.removeEventListener("pointerup", onPointerUp);
			window.removeEventListener("touchend", onPointerUp);
			window.removeEventListener("touchcancel", onPointerUp);
		};
		window.addEventListener("pointerup", onPointerUp, { once: true });
		window.addEventListener("touchend", onPointerUp, { once: true });
		window.addEventListener("touchcancel", onPointerUp, { once: true });
	}}
	onfocus={setTooltip}
	onblur={() => {
		pressed = false;
		if (selectedNavItem?.element === a) selectedNavItem = null;
	}}
	ondragstart={() => {
		dragging = true;
		selectedNavItem = null;
		pressed = false;
		showHighlight = false;
		setTimeout(() => {
			showHighlight = true;
		}, 0);
	}}
	ondragend={() => {
		pressed = false;
		dragging = false;
	}}
	bind:this={a}
	title={browser ? undefined : name}
	aria-label={name}
>
	<img
		src={icon}
		{alt}
		width="50"
		height="50"
		class={{ "brightness-[48%]": pressed }}
	/>
	{#if highlight && showHighlight}
		<span class="size-1 rounded-full bg-[#7C7C7C] forced-colors:bg-[CanvasText]"
		></span>
	{/if}
</a>
