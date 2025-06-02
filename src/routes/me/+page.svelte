<script>
  import PageWrapper from '$lib/widgets/PageWrapper.svelte'
  import SubpageWrapper from '$lib/widgets/SubpageWrapper.svelte'
  import GreetingsCard from './GreetingsCard.svelte'
  import LgbtqiaPlusSupportCard from './LGBTQIAPlusSupportCard.svelte'
  import UkraineSupportCard from './UkraineSupportCard.svelte'
  import TravelAndExploreCard from './TravelAndExploreCard.svelte'
  import SpeakingLanguagesCard from './SpeakingLanguagesCard.svelte'
  import PrivacySupportCard from './PrivacySupportCard.svelte'
  import LocalTimeCard from './LocalTimeCard.svelte'
  import HlothCharityCard from './HlothCharityCard.svelte'
  import GitHubRepositoriesCard from './GitHubRepositoriesCard.svelte'
  import FunFactAboutMeCard from './FunFactAboutMeCard.svelte'
  import OpenToWorkCard from './OpenToWorkCard.svelte'
  import ReadyToRelocateCard from './ReadyToRelocateCard.svelte'
  import FavoriteThingsCard from './FavoriteThingsCard.svelte'
  import EducationCard from './EducationCard.svelte'
</script>

<PageWrapper viewId="me">
  <SubpageWrapper title="me.svelte" backUrl="/">
    <div class="grid h-full grid-flow-col grid-cols-10 grid-rows-4 gap-4">
      <GreetingsCard />
      <LgbtqiaPlusSupportCard />
      <UkraineSupportCard />
      <TravelAndExploreCard />
      <SpeakingLanguagesCard />
      <PrivacySupportCard />
      <LocalTimeCard />
      <HlothCharityCard />
      <GitHubRepositoriesCard />
      <FunFactAboutMeCard />
      <OpenToWorkCard />
      <FavoriteThingsCard />
      <EducationCard />
      <ReadyToRelocateCard />
    </div>
  </SubpageWrapper>
</PageWrapper>
