<script lang="ts">
	import Squircle from "$lib/Squircle.svelte";

	let {
		children,
		class: className,
		viewId,
	}: {
		children: import("svelte").Snippet;
		class?: import("svelte/elements").ClassValue;
		viewId?: string;
	} = $props();
</script>

<main
	class={[
		`relative max-h-[815px] min-h-0 w-[1384px] max-w-full flex-1 shrink-0
		rounded-[32px] backdrop-blur-[48px] md:max-h-[560px] px920:max-h-[600px]
		px1180:max-h-[645px] transparency-reduce:bg-transparent
		transparency-reduce:backdrop-blur-none`,
		className,
	]}
	style={viewId ? `view-transition-name: ${viewId};` : undefined}
>
	<Squircle
		class="bg-thick transparency-reduce:bg-opaque-sheet"
		innerStrokeWidth={2}
	>
		{@render children()}
	</Squircle>
</main>

<style>
	main {
		box-shadow: 0 14px 80px 0 rgba(0, 0, 0, 0.6);
	}
	@media (max-height: 200px) {
		main {
			display: none;
		}
	}
</style>
