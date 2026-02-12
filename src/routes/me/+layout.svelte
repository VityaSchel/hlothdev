<script lang="ts">
	import { page } from "$app/state";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";
	import PageWrapper from "$lib/widgets/PageWrapper.svelte";
	import SubpageWrapper from "$lib/widgets/SubpageWrapper.svelte";

	let {
		children,
	}: {
		children: import("svelte").Snippet;
	} = $props();

	let isSubpage = $derived(page.route.id !== "/me");
</script>

<PageWrapper viewId="me" class={{ "max-md:h-full": isSubpage }}>
	<SubpageWrapper
		title="me.svelte"
		srTitle="About Me page"
		backUrl="/"
		button={{
			href: `${getMainDomainProtocol()}://cv.${getMainDomain()}`,
			external: true,
			text: "Open Developer Resume",
		}}
		class="overflow-auto rounded-b-[32px] focus-scrollable px470:py-[26.5px]"
	>
		<div
			class={[
				"@container-[size] relative m-auto",
				{
					[`aspect-[389/1799] h-auto w-full max-w-[470px]
					px580:aspect-[659/1096] px580:max-w-none md:aspect-[1064/682]
					md:h-full md:w-auto px957:h-auto px957:w-full px1180:aspect-[1334/540]
					px1180:h-[540px] px1180:max-h-full px1180:w-auto`]: !isSubpage,
					"h-full w-full md:min-h-[495px] px1180:min-h-[540px]": isSubpage,
				},
			]}
			aria-label={isSubpage ? "Subpage" : "Grid of cards"}
		>
			<div
				class={[
					`grid max-h-full min-h-0 grid-flow-col grid-cols-3 grid-rows-13
					gap-[3.404cqw] px580:grid-cols-5 px580:grid-rows-8
					px580:gap-[2.3121cqw] md:grid-cols-8 md:grid-rows-5
					md:gap-[2.6981450253cqh] px1180:min-h-0 px1180:grid-cols-10
					px1180:grid-rows-4`,
				]}
			>
				{@render children()}
			</div>
		</div>
	</SubpageWrapper>
</PageWrapper>
