<script>
  import PageWrapper from '$lib/widgets/PageWrapper.svelte'
  import MeCard from './MeCard.svelte'
  import ResumeCard from './ResumeCard.svelte'
  import DonateCard from './DonateCard.svelte'
  import OnionMirrorCard from './OnionMirrorCard.svelte'
  import WebsitesSection from './WebsitesSection.svelte'
  import ProjectsSection from './ProjectsSection.svelte'
  import PortfolioSection from './PortfolioSection.svelte'
</script>

<PageWrapper>
  <div class="flex h-full flex-col gap-4 pt-4">
    <div class="flex flex-col md:flex-row gap-4 px-4">
      <MeCard />
      <div class="flex flex-1 px1380:flex-[593] flex-col gap-4">
        <ResumeCard />
        <div class="flex shrink-0 min-h-0 xl:min-h-auto xl:shrink flex-1 gap-4">
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
</PageWrapper>
