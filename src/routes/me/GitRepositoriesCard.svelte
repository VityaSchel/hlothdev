<script lang="ts">
	import ForgejoIcon from "#lib/icons/ForgejoIcon.svelte";
	import { subdomainUrl } from "#lib/utils.ts";
	import GridCard from "#lib/widgets/grid-cards/GridCard.svelte";

	let {
		repositories,
	}: {
		repositories: string;
	} = $props();
</script>

<a
	href={subdomainUrl("git", "/hloth")}
	rel="noopener noreferrer"
	target="_blank"
	class="@container col-start-1 col-end-2 row-start-11 row-end-12 cursor-default
		rounded-[11.76%] focus-lg px580:col-start-2 px580:col-end-3
		px580:row-start-5 px580:row-end-6 md:col-start-6 md:col-end-7 md:row-start-5
		md:row-end-6 px1180:col-start-8 px1180:col-end-9 px1180:row-start-3
		px1180:row-end-4"
	aria-label="{repositories} repositories on my Forgejo git server"
>
	<GridCard
		size="xs"
		class="size-full bg-linear-to-b from-[#232a33] to-[#171e26]"
	>
		<div
			class="flex size-full flex-col items-start justify-between p-[6.72cqw]"
		>
			<span class="flex size-[36.97cqw]">
				<ForgejoIcon />
			</span>
			<div class="flex flex-col select-none">
				<span
					class="text-[26cqw] leading-[25cqw] font-medium tracking-tight
						text-white/80"
				>
					{repositories}
				</span>
				<span
					class="pl-[3.36cqw] text-[10.08cqw] leading-[12cqw] font-semibold
						text-white/90"
				>
					repositories
				</span>
			</div>
		</div>
	</GridCard>
</a>
