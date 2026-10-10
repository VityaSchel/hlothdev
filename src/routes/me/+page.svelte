<script lang="ts">
	import GreetingsCard from "./GreetingsCard.svelte";
	import LGBTQIAPlusSupportCard from "./LGBTQIAPlusSupportCard.svelte";
	import StandWithPeaceCard from "./StandWithPeaceCard.svelte";
	import TravelAndExploreCard from "./TravelAndExploreCard.svelte";
	import SpeakingLanguagesCard from "./SpeakingLanguagesCard.svelte";
	import PrivacyRightsCard from "./PrivacyRightsCard.svelte";
	import LocalTimeCard from "./LocalTimeCard.svelte";
	import HlothCharityCard from "./HlothCharityCard.svelte";
	import GitRepositoriesCard from "./GitRepositoriesCard.svelte";
	import FunFactAboutMeCard from "./FunFactAboutMeCard.svelte";
	import OpenToWorkCard from "./OpenToWorkCard.svelte";
	import ReadyToRelocateCard from "./ReadyToRelocateCard.svelte";
	import FavoriteThingsCard from "./FavoriteThingsCard.svelte";
	import EducationCard from "./EducationCard.svelte";
	import PageMetadata from "#lib/widgets/PageMetadata.svelte";

	let { data } = $props();
</script>

<PageMetadata />
<GreetingsCard inert />
<GreetingsCard />
<LGBTQIAPlusSupportCard />
<StandWithPeaceCard />
<TravelAndExploreCard />
<SpeakingLanguagesCard />
<PrivacyRightsCard inert />
<PrivacyRightsCard />
<LocalTimeCard />
<HlothCharityCard />
<GitRepositoriesCard repositories={data.gitRepositoriesCount} />
<FunFactAboutMeCard />
<OpenToWorkCard />
<ReadyToRelocateCard />
<FavoriteThingsCard />
<EducationCard />
