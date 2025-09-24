<script>
	import { showcase } from "$lib/showcase";
	import ScrollableSection from "$lib/ui/ScrollableSection.svelte";
	import ShowcaseCard from "$lib/widgets/ShowcaseCard.svelte";

	const websites = $derived(showcase.filter((p) => p.type === "website"));
</script>

<ScrollableSection
	name="Websites"
	childrenCount={websites.length}
	skip={{ label: "Skip to projects section of showcase", id: "projects" }}
>
	{#each websites as website (website.id)}
		<ShowcaseCard id={website.id} name={website.name} banner={website.banner} />
	{/each}
</ScrollableSection>
