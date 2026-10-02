<script lang="ts">
	import PageWrapper from "$lib/widgets/PageWrapper.svelte";
	import SubpageWrapper from "$lib/widgets/SubpageWrapper.svelte";
	import UsdtTrc20 from "./UsdtTrc20.svelte";
	import UsdtErc20 from "./UsdtErc20.svelte";
	import Iban from "./Iban.svelte";
	import Bitcoin from "./Bitcoin.svelte";
	import Ethereum from "./Ethereum.svelte";
	import Litecoin from "./Litecoin.svelte";
	import PageMetadata from "$lib/widgets/PageMetadata.svelte";
</script>

<PageMetadata
	name="Donate"
	description="I create open-source apps, developer tools and fun projects. If you want to support me and my creativity, donate to one of my crypto wallets."
/>
<PageWrapper viewId="donate" class="h-full md:max-h-161.25">
	<SubpageWrapper
		title="donate.svelte"
		srTitle="Donate with cryptocurrencies"
		backUrl="/"
		button={{
			text: "Open PGP Signed List",
			href: "/donate-pgp-signed.txt",
		}}
		class="overflow-auto rounded-b-4xl focus-scrollable"
	>
		<div
			class="grid auto-rows-max grid-cols-1 grid-rows-2 gap-4 px470:gap-6.25
				px630:grid-cols-2 px870:h-full px870:min-h-133.75 px870:grid-cols-3
				no-hover:h-auto!"
		>
			<UsdtTrc20 />
			<UsdtErc20 />
			<Iban />
			<Bitcoin />
			<Ethereum />
			<Litecoin />
		</div>
	</SubpageWrapper>
</PageWrapper>
