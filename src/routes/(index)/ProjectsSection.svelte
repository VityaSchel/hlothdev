<script lang="ts">
	import { projects } from "#lib/showcase/cards.ts";
	import ScrollableSection from "#lib/ui/ScrollableSection.svelte";
	import ShowcaseCard from "#lib/widgets/ShowcaseCard.svelte";
</script>

<ScrollableSection
	name="Projects"
	id="projects"
	childrenCount={projects.length}
	skip={{ label: "Skip to footer navigation", id: "footer-nav" }}
>
	{#each projects as { id, name, banner }, i (id)}
		<ShowcaseCard {id} {name} {banner} lazy={i >= 6} />
	{/each}
</ScrollableSection>
