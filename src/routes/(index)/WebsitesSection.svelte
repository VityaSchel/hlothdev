<script lang="ts">
	import { websites } from "$lib/showcase/items";
	import ScrollableSection from "$lib/ui/ScrollableSection.svelte";
	import ShowcaseCard from "$lib/widgets/ShowcaseCard.svelte";
</script>

<ScrollableSection
	name="Websites"
	childrenCount={websites.length}
	skip={{ label: "Skip to projects section of showcase", id: "projects" }}
>
	{#each websites as { id, name, banner } (id)}
		<ShowcaseCard {id} {name} {banner} />
	{/each}
</ScrollableSection>
