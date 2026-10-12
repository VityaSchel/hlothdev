<script lang="ts">
	import GridCard from "#lib/widgets/grid-cards/GridCard.svelte";
	import bg from "#lib/assets/peaceful-nature.webp";
	import bgLqip from "#lib/assets/peaceful-nature.webp?lqip";
</script>

<GridCard
	size="sm"
	class="@container col-start-2 col-end-4 row-start-8 row-end-9
		px580:col-start-4 px580:col-end-6 px580:row-start-1 px580:row-end-2"
	aria-label="Peace support card / Background image: green leaves overhang a tranquil river with a rock"
>
	<div
		class="group flex size-full flex-col justify-between overflow-clip
			rounded-[12.5984252cqw] bg-neutral-600 bg-cover p-[6.29cqw]
			contrast-more:relative contrast-more:isolate contrast-more:before:absolute
			contrast-more:before:inset-0 contrast-more:before:-z-1
			contrast-more:before:bg-linear-to-b contrast-more:before:from-black/60
			contrast-more:before:via-black/40 contrast-more:before:to-black/55"
		style="background-image: url({bg}), url({bgLqip.lqip});"
	>
		<span
			class="text-[3.54cqw] font-normal tracking-[-0.118cqw] opacity-0
				transition-opacity duration-300 text-shadow-black/50 text-shadow-lg
				group-hover:opacity-100 has-focus-within:opacity-100
				no-hover:opacity-100"
			aria-label="Photo attribution"
		>
			Photo by <a
				href="https://unsplash.com/@mrtrevorwu"
				class="font-medium"
				target="_blank"
				rel="nofollow noreferrer noopener"
			>
				Trevor
			</a>
		</span>
		<h2
			class="text-[5cqw] leading-[5.25cqw] font-semibold tracking-[-0.375cqw]
				@px188:tracking-[-0.31cqw] @px239:tracking-[-0.25cqw]"
		>
			I stand with peace and against violence
		</h2>
	</div>
</GridCard>
