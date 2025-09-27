<script lang="ts">
	import GreetingsCard from "./GreetingsCard.svelte";
	import LgbtqiaPlusSupportCard from "./LGBTQIAPlusSupportCard.svelte";
	import UkraineSupportCard from "./UkraineSupportCard.svelte";
	import TravelAndExploreCard from "./TravelAndExploreCard.svelte";
	import SpeakingLanguagesCard from "./SpeakingLanguagesCard.svelte";
	import PrivacySupportCard from "./PrivacyRightsCard.svelte";
	import LocalTimeCard from "./LocalTimeCard.svelte";
	import HlothCharityCard from "./HlothCharityCard.svelte";
	import GitRepositoriesCard from "./GitRepositoriesCard.svelte";
	import FunFactAboutMeCard from "./FunFactAboutMeCard.svelte";
	import OpenToWorkCard from "./OpenToWorkCard.svelte";
	import ReadyToRelocateCard from "./ReadyToRelocateCard.svelte";
	import FavoriteThingsCard from "./FavoriteThingsCard.svelte";
	import EducationCard from "./EducationCard.svelte";
	import PageMetadata from "$lib/widgets/PageMetadata.svelte";

	let { data } = $props();
</script>

<PageMetadata />
<GreetingsCard inert />
<GreetingsCard />
<LgbtqiaPlusSupportCard />
<UkraineSupportCard />
<TravelAndExploreCard />
<SpeakingLanguagesCard />
<PrivacySupportCard inert />
<PrivacySupportCard />
<LocalTimeCard />
<HlothCharityCard />
<GitRepositoriesCard repositories={data.gitRepositoriesCount} />
<FunFactAboutMeCard />
<OpenToWorkCard />
<ReadyToRelocateCard />
<FavoriteThingsCard />
<EducationCard />
