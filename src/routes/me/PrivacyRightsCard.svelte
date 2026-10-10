<script lang="ts">
	import { page } from "$app/state";
	import "@fontsource-variable/sofia-sans-extra-condensed";
	import GridCard from "#lib/widgets/grid-cards/GridCard.svelte";
	import Button from "#lib/ui/Button.svelte";
	import bgLqip from "#lib/assets/privacy-rights.webp?lqip";
	import { torDomain } from "#lib/utils.ts";

	let {
		inert,
		children,
	}: {
		inert?: boolean;
		children?: import("svelte").Snippet;
	} = $props();

	let expanded = $derived(page.route.id === "/me/privacy-rights" && !inert);
</script>

<GridCard
	size="lg"
	class={[
		"group @container-size overflow-clip",
		expanded
			? `absolute top-0 left-0 z-1 col-span-full col-start-1 row-span-full
				row-start-1 size-full`
			: `relative col-start-1 col-end-3 row-start-9 row-end-11 px580:col-start-4
				px580:col-end-6 px580:row-start-2 px580:row-end-4 md:col-start-7
				md:col-end-9 md:row-start-1 md:row-end-3`,
	]}
	viewId={inert ? undefined : "privacy-rights"}
	data-nosnippet={inert ? "" : undefined}
	{inert}
	cornerRadius={expanded ? 13 : 0.05118110236}
	aria-label="Privacy Rights Support Card"
>
	<enhanced:img
		src="#lib/assets/privacy-rights.webp"
		class="absolute top-0 left-0 size-full bg-neutral-200 bg-cover object-cover
			object-[30%] text-[0px] select-none"
		alt="Background: a surveillance camera mounted on a wall"
		width="2400"
		height="1138"
		style:background-image="url({bgLqip.lqip})"
		style:view-transition-name={inert
			? undefined
			: "privacy-rights-content-ignore"}
	/>
	{#if expanded}
		{@render children?.()}
	{:else}
		<div
			class="relative z-1 flex h-full flex-col justify-end gap-[2.36cqw]
				px-[5.90cqw] py-[5.11cqw]"
			style:view-transition-name={inert ? undefined : "privacy-rights-content"}
		>
			<span
				class="mb-auto text-[3.54cqw] tracking-[-0.011cqw] text-[#5D5D5D]
					opacity-0 transition-opacity duration-300 group-hover:opacity-100
					has-focus-within:opacity-100 no-hover:opacity-100"
				aria-label="Photo attribution"
			>
				Photo by <a
					href="https://unsplash.com/@srhhrbch"
					class="font-medium"
					target="_blank"
					rel="nofollow noreferrer noopener"
				>
					Siarhei Horbach
				</a>
			</span>
			<h3
				class="font-extra-condensed text-[7.87cqw] leading-5 font-extrabold
					tracking-[-0.236cqw] uppercase"
			>
				Privacy Rights
			</h3>
			<p
				class="pb-[3.54cqw] text-[4.33cqw] leading-[5.11cqw] font-medium
					tracking-[-0.3cqw] break-words @px170:tracking-[-0.25cqw]
					@px215:tracking-[-0.2cqw] @px239:tracking-[-0.19cqw]"
			>
				I advocate for privacy and prefer self-hosting over SAAS. All my
				personal websites are available in Tor onion network under <a
					href="http://{torDomain}/me"
					rel="nofollow noreferrer noopener"
					class="font-semibold">{torDomain}</a
				> domain.
			</p>
			<Button
				element="a"
				containerClass="h-[10.68cqh]"
				variant="md"
				href="/me/privacy-rights"
				class="flex w-full rounded-lg focus-xl"
				draggable="false"
			>
				Learn about my commitment
			</Button>
		</div>
	{/if}
</GridCard>
