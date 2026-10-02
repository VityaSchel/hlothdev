<script lang="ts">
	import type { Snippet } from "svelte";

	let { children }: { children: Snippet } = $props();

	let scrolled = $state(false);
</script>

<div
	class={[
		`no-scroll-when-wide flex max-h-[480px] flex-1 flex-col justify-evenly
		gap-[3px] rounded-b-[32px] border-t pb-4 transition-colors md:overflow-auto`,
		scrolled ? "border-white/10" : "border-transparent",
	]}
	onscroll={(e) => (scrolled = e.currentTarget.scrollTop > 0)}
	aria-label="Showcase section with my projects"
>
	{@render children()}
</div>
