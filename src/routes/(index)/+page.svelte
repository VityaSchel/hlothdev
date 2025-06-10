<script>
  import PageWrapper from '$lib/widgets/PageWrapper.svelte'
  import MeCard from './MeCard.svelte'
  import ResumeCard from './ResumeCard.svelte'
  import DonateCard from './DonateCard.svelte'
  import OnionMirrorCard from './OnionMirrorCard.svelte'
  import WebsitesSection from './WebsitesSection.svelte'
  import ProjectsSection from './ProjectsSection.svelte'
  import PortfolioSection from './PortfolioSection.svelte'
  import PageMetadata from '$lib/widgets/PageMetadata.svelte'
</script>

<PageMetadata />
<PageWrapper>
  <h1 class="sr-only">Main page</h1>
  <div
    class="
      scrollbar-thin flex h-full flex-col gap-4 overflow-auto rounded-4xl pt-4
      focus-scrollable
      md:overflow-visible
    "
  >
    <div
      class="
        flex flex-col gap-3 px-4
        px470:gap-4
        md:flex-row
      "
    >
      <MeCard />
      <div
        class="
          flex flex-col gap-3
          px420:flex-1
          px470:gap-4
          px1380:flex-[593]
        "
      >
        <ResumeCard />
        <div
          class="
            flex min-h-0 shrink-0 flex-col gap-2.5
            px420:flex-1 px420:flex-row
            px470:gap-4
            xl:min-h-auto xl:shrink
          "
        >
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
