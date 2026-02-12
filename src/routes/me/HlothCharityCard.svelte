<script lang="ts">
	import XsCard from "$lib/widgets/grid-cards/XSCard.svelte";
	import bg from "$lib/assets/hloth-charity.webp?enhanced";
	import bgLqip from "$lib/assets/hloth-charity.webp?lqip";
</script>

<a
	href="https://x.com/hlothdon"
	rel="noopener noreferrer"
	target="_blank"
	class="@container col-start-1 col-end-2 row-start-12 row-end-13 cursor-default
		rounded-[11.76%] focus-lg px580:row-start-8 px580:row-end-9 md:col-start-7
		md:col-end-8 md:row-start-3 md:row-end-4 px1180:col-start-7 px1180:col-end-8
		px1180:row-start-4 px1180:row-end-5"
	aria-label="Link to my charity log on X (formerly Twitter)"
>
	<XsCard
		class="flex size-full items-end bg-cover"
		bg
		--bg="url({bg.img
			.src}), url({bgLqip.lqip}), linear-gradient(to bottom, var(--color-neutral-600), var(--color-neutral-600))"
	>
		<span
			class="one-storey-a p-[6.72cqw] text-[16.8cqw] leading-[20.16cqw]
				font-semibold tracking-[-0.075cqw] select-none"
		>
			hloth
			<br />
			charity
		</span>
	</XsCard>
</a>
