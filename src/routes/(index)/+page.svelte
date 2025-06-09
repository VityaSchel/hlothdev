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
  <div
    class="
      scrollbar-thin flex h-full flex-col gap-4 overflow-auto rounded-4xl pt-4
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
          <div class="
            relative max-w-full flex-1
            px680:flex-3/5
            md:flex-1
            lg:flex-[412]
          ">
            <DonateCard />
          </div>
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
