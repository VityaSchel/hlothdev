<script>
  import { portfolio } from '$lib/portfolio'
  import ScrollableSection from '$lib/ui/ScrollableSection.svelte'
  import ProfileItemCard from '$lib/widgets/ProjectItemCard.svelte'

  const websites = $derived(portfolio.filter((p) => p.type === 'website'))
</script>

<ScrollableSection
  name="Websites"
  childrenCount={websites.length}
  skip={{ label: 'Skip to projects section of portfolio', id: 'projects' }}
>
  {#each websites as website (website.id)}
    <ProfileItemCard id={website.id} name={website.name} banner={website.banner} />
  {/each}
</ScrollableSection>
