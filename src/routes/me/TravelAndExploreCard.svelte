<script lang="ts">
	import XlCard from "$lib/widgets/grid-cards/XLCard.svelte";
	import bg from "$lib/assets/me-in-front-of-zeda-makhuntseti-waterfall-2024.webp?enhanced";
	import bgLqip from "$lib/assets/me-in-front-of-zeda-makhuntseti-waterfall-2024.webp?lqip";
</script>

<XlCard
	bg="url({bg.img
		.src}), url({bgLqip.lqip}), linear-gradient(to bottom, var(--color-neutral-600), var(--color-neutral-600))"
	class="container-size one-storey-a col-start-1 col-end-4 row-start-5 row-end-8
		bg-cover px580:col-start-3 px580:col-end-6 px580:row-start-4 px580:row-end-7
		md:col-start-4 md:col-end-7 md:row-start-2 md:row-end-5"
	aria-label="Travel and explore card"
>
	<div class="flex flex-col gap-[3.08cqw] px-[8.22cqw] py-[8.74cqw]">
		<!-- prettier-ignore -->
		<h2 class="
      text-[10.02cqw] leading-[10.02cqw] font-bold tracking-[0.154cqw]
    ">
      I love to travel and explore
    </h2>
		<p
			class="text-[5.39cqw] leading-[6.42cqw] font-semibold
				tracking-[-0.102cqw]"
		>
			Every year I try new technologies
			<br aria-hidden="true" />
			and try to keep up with trends
		</p>
	</div>
</XlCard>
