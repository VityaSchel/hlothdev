<script>
	import { showcase } from "$lib/showcase";
	import ScrollableSection from "$lib/ui/ScrollableSection.svelte";
	import ProfileItemCard from "$lib/widgets/ProjectItemCard.svelte";

	let projects = $derived(showcase.filter((p) => p.type === "project"));
</script>

<ScrollableSection
	name="Projects"
	id="projects"
	childrenCount={projects.length}
	skip={{ label: "Skip to footer navigation", id: "footer-nav" }}
>
	{#each projects as project (project.id)}
		<ProfileItemCard
			id={project.id}
			name={project.name}
			banner={project.banner}
		/>
	{/each}
</ScrollableSection>
