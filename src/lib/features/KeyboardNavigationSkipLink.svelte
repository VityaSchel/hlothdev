<script lang="ts">
	let {
		id,
		children,
		class: className,
	}: {
		id: string;
		children: import("svelte").Snippet;
		class?: import("svelte/elements").ClassValue;
	} = $props();
</script>

<a
	href="#{id}"
	class={[
		`pointer-events-none absolute z-10 rounded-md px-1 text-xs font-bold
		opacity-0 shadow-md focus:outline-0 focus-visible:bg-blue-600/80
		focus-visible:opacity-100`,
		className,
	]}
	onclick={(e) => {
		e.preventDefault();
		const candidates =
			document
				.getElementById(id)
				?.querySelectorAll<HTMLElement>(
					'input, button, a[href], [tabindex]:not([tabindex="-1"])',
				) ?? [];
		[...candidates].find((el) => el.getClientRects().length > 0)?.focus();
	}}
>
	{@render children()}
</a>
