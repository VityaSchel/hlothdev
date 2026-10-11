<script lang="ts">
	import Squircle from "#lib/Squircle.svelte";
	import { windowName } from "#lib/view-transition.svelte.ts";

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
		`relative min-h-0 w-[1384px] max-w-full rounded-[32px] backdrop-blur-[48px]
		transparency-reduce:backdrop-blur-none`,
		className,
	]}
	style:--morph-name={viewId}
	style:view-transition-name={windowName(viewId)}
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
