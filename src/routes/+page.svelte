<script>
  import MeCard from '$lib/widgets/MeCard.svelte'
  import ResumeCard from '$lib/widgets/ResumeCard.svelte'
  import DonateCard from '$lib/widgets/DonateCard.svelte'
  import OnionMirrorCard from '$lib/widgets/OnionMirrorCard.svelte'
  import WebsitesSection from '$lib/widgets/WebsitesSection.svelte'
  import ProjectsSection from '$lib/widgets/ProjectsSection.svelte'
  import PortfolioSection from '$lib/widgets/PortfolioSection.svelte'
</script>

<div class="flex h-full flex-col gap-4 pt-4">
  <div class="flex gap-4 px-4">
    <MeCard />
    <div class="flex flex-[593] flex-col gap-4">
      <ResumeCard />
      <div class="flex flex-1 gap-4">
        <DonateCard />
        <OnionMirrorCard />
      </div>
    </div>
  </div>
  <PortfolioSection>
    <WebsitesSection />
    <ProjectsSection />
  </PortfolioSection>
</div>
