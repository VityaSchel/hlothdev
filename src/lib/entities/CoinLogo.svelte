<script lang="ts">
	let { children }: { children: import("svelte").Snippet } = $props();
</script>

<div
	class="coin-logo h-full w-[52px] overflow-visible select-none
		[&>svg]:min-h-full"
>
	{@render children()}
</div>

<style>
	:global(.coin-logo svg) {
		width: 67px;
	}
</style>
