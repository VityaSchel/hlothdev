<script>
	import PageWrapper from "$lib/widgets/PageWrapper.svelte";
	import MeCard from "./MeCard.svelte";
	import ResumeCard from "./ResumeCard.svelte";
	import DonateCard from "./DonateCard.svelte";
	import OnionMirrorCard from "./OnionMirrorCard.svelte";
	import WebsitesSection from "./WebsitesSection.svelte";
	import ProjectsSection from "./ProjectsSection.svelte";
	import ShowcaseSection from "./ShowcaseSection.svelte";
	import PageMetadata from "$lib/widgets/PageMetadata.svelte";
</script>

<PageMetadata />
<PageWrapper>
	<h1 class="sr-only">Main page</h1>
	<div
		class="scrollbar-thin scroll-when-wide flex h-full flex-col gap-4
			overflow-auto rounded-4xl pt-4 focus-scrollable md:overflow-visible"
	>
		<div class="flex flex-col gap-3 px-4 px470:gap-4 md:flex-row">
			<MeCard />
			<div
				class="flex flex-col gap-3 px420:flex-1 px470:gap-4 px1380:flex-[593]"
			>
				<ResumeCard />
				<div
					class="flex min-h-0 shrink-0 flex-col gap-2.5 px420:flex-1
						px420:flex-row px470:gap-4 xl:min-h-auto xl:shrink"
				>
					<DonateCard />
					<OnionMirrorCard />
				</div>
			</div>
		</div>
		<ShowcaseSection>
			<WebsitesSection />
			<ProjectsSection />
		</ShowcaseSection>
	</div>
</PageWrapper>

<style>
	@media ((min-width: 1380px) and (max-height: 530px)) or ((min-width: 1180px) and (max-height: 490px)) or ((min-width: 1024px) and (max-height: 450px)) or ((min-width: 920px) and (max-height: 425px)) or ((min-width: 870px) and (max-height: 400px)) or ((min-width: 870px) and (max-height: 400px)) or ((min-width: 768px) and (max-height: 380px)) {
		.scroll-when-wide {
			overflow: auto;
		}
		.scroll-when-wide :global(.no-scroll-when-wide) {
			overflow: visible;
		}
	}
</style>
