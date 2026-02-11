<script lang="ts">
	import XsCard from "$lib/widgets/grid-cards/XSCard.svelte";
	import bgLqip from "$lib/assets/open-to-work.webp?lqip";
</script>

<a
	href="https://www.linkedin.com/in/hloth"
	rel="noopener noreferrer"
	target="_blank"
	class="container-size col-start-1 col-end-2 row-start-4 row-end-5
		cursor-default rounded-[11.76%] focus-lg md:col-start-1 md:col-end-2
		md:row-start-5 md:row-end-6 px1180:col-start-9 px1180:col-end-10
		px1180:row-start-1 px1180:row-end-2"
	aria-label="Link to my LinkedIn profile"
>
	<XsCard class="size-full overflow-clip bg-cover" aria-label="Open to work">
		<enhanced:img
			src="$lib/assets/open-to-work.webp"
			style="background-image: url({bgLqip.lqip}), linear-gradient(to bottom, var(--color-neutral-600), var(--color-neutral-600))"
			alt="Me with a sign saying 'Open to work'"
			class="size-full bg-cover object-cover text-[0px] leading-[12cqw]"
			width="238"
			height="238"
		/>
	</XsCard>
</a>
