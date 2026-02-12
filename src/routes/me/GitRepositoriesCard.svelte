<script lang="ts">
	import ForgejoIcon from "$lib/icons/ForgejoIcon.svelte";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";
	import XsCard from "$lib/widgets/grid-cards/XSCard.svelte";

	let {
		repositories,
	}: {
		repositories: string;
	} = $props();
</script>

<a
	href="{getMainDomainProtocol()}://git.{getMainDomain()}/hloth"
	rel="noopener noreferrer"
	target="_blank"
	class="@container col-start-1 col-end-2 row-start-11 row-end-12 cursor-default
		rounded-[11.76%] focus-lg px580:col-start-2 px580:col-end-3
		px580:row-start-5 px580:row-end-6 md:col-start-6 md:col-end-7 md:row-start-5
		md:row-end-6 px1180:col-start-8 px1180:col-end-9 px1180:row-start-3
		px1180:row-end-4"
	aria-label="Link to my profile on Forgejo, which has {repositories} git repositories"
>
	<XsCard class="size-full bg-gradient-to-b from-[#232a33] to-[#171e26]">
		<!-- prettier-ignore -->
		<div class="
      flex size-full flex-col items-start justify-between p-[6.72cqw]
    ">
    <span class="flex h-[36.97cqw] w-[36.97cqw]">
      <ForgejoIcon />
    </span>
    <div class="flex flex-col gap-0 select-none">
      <span class="
        text-[26cqw] leading-[25cqw] font-medium tracking-tight text-white/80
      ">{repositories}</span>
      <span class="
        pl-[3.36cqw] text-[10.08cqw] leading-[12cqw] font-semibold text-white/90
      ">repositories</span>
    </div>
  </div>
	</XsCard>
</a>
