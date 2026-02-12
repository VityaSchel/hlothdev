<script lang="ts">
	let {
		children,
		class: className,
	}: {
		children: import("svelte").Snippet;
		class?: import("svelte/elements").ClassValue;
	} = $props();
</script>

<div class="@container-[size] h-full rounded-2xl select-none">
	<div
		class={[
			"flex h-full w-full items-center gap-[20cqb] px-[20cqb] md:justify-center",
			className,
		]}
	>
		{@render children()}
	</div>
</div>
