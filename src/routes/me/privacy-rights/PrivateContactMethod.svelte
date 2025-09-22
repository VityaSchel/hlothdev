<script lang="ts">
	let {
		link,
		icon,
		name,
		preferred,
	}: {
		link: string;
		icon: import("svelte").Snippet;
		name: string;
		preferred?: boolean;
	} = $props();
</script>

<a
	href={link}
	target="_blank"
	rel="nofollow noopener noreferrer"
	class="relative flex flex-1 flex-col items-center justify-center gap-1
		rounded-md border border-[#bbbbbf] bg-white px-4 py-2 text-center text-sm
		font-medium tracking-tight focus-sm-dark"
>
	<span
		class="flex h-7 w-7 items-end justify-center [&_svg]:h-full [&_svg]:w-full"
		aria-hidden="true"
	>
		{@render icon()}
	</span>
	<span class="leading-4">{name}</span>
	{#if preferred}
		<span
			class="
        shadow-badge absolute top-0 left-0 z-[1] h-[18px] w-[60px]
        -translate-x-1/4 -translate-y-2/3 rounded-full bg-[#FF3B30] text-[10px]
        leading-[18px] font-medium text-white
      "
		>
			Preferred
		</span>
	{/if}
</a>

<style>
	.shadow-badge {
		box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.25);
	}
</style>
