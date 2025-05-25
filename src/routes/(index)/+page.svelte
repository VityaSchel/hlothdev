<script>
  import MeCard from './MeCard.svelte'
  import ResumeCard from './ResumeCard.svelte'
  import DonateCard from './DonateCard.svelte'
  import OnionMirrorCard from './OnionMirrorCard.svelte'
  import WebsitesSection from './WebsitesSection.svelte'
  import ProjectsSection from './ProjectsSection.svelte'
  import PortfolioSection from './PortfolioSection.svelte'
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
