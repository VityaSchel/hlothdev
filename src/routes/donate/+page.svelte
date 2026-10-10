<script lang="ts">
	import PageWrapper from "#lib/widgets/PageWrapper.svelte";
	import SubpageWrapper from "#lib/widgets/SubpageWrapper.svelte";
	import PageMetadata from "#lib/widgets/PageMetadata.svelte";
	import DonateCurrencyCard from "#lib/features/DonateCurrencyCard.svelte";
	import TetherIcon from "#lib/icons/TetherIcon.svelte";
	import TetherIconRendered from "#lib/icons/TetherIcon.svelte?render";
	import TronIcon from "#lib/icons/TronIcon.svelte";
	import TronIconRendered from "#lib/icons/TronIcon.svelte?render";
	import EthereumIcon from "#lib/icons/EthereumIcon.svelte";
	import EthereumIconRendered from "#lib/icons/EthereumIcon.svelte?render";
	import IbanIcon from "#lib/icons/IbanIcon.svelte";
	import IbanIconRendered from "#lib/icons/IbanIcon.svelte?render";
	import BitcoinIcon from "#lib/icons/BitcoinIcon.svelte";
	import BitcoinIconRendered from "#lib/icons/BitcoinIcon.svelte?render";
	import LitecoinIcon from "#lib/icons/LitecoinIcon.svelte";
	import LitecoinIconRendered from "#lib/icons/LitecoinIcon.svelte?render";
	import { clickToPayCoin, clickToPayToken, iban, networks } from "./consts";

	const coins = {
		tether: { Icon: TetherIcon, rendered: TetherIconRendered },
		tron: { Icon: TronIcon, rendered: TronIconRendered },
		ethereum: { Icon: EthereumIcon, rendered: EthereumIconRendered },
		iban: { Icon: IbanIcon, rendered: IbanIconRendered },
		bitcoin: { Icon: BitcoinIcon, rendered: BitcoinIconRendered },
		litecoin: { Icon: LitecoinIcon, rendered: LitecoinIconRendered },
	};

	const cards: import("svelte").ComponentProps<typeof DonateCurrencyCard>[] = [
		{
			name: "USDT TRC-20",
			preferred: true,
			address: networks.tron.address,
			clickToPay: clickToPayToken("usdtTrc20"),
			coins: [coins.tether, coins.tron],
		},
		{
			name: "USDT ERC-20",
			address: networks.eth.address,
			clickToPay: clickToPayToken("usdtErc20"),
			coins: [coins.tether, coins.ethereum],
		},
		{
			name: "IBAN",
			address: iban,
			subtitle: "Swift/BIC code: BBVAESMM",
			coins: [coins.iban],
		},
		{
			name: "Bitcoin",
			address: networks.btc.address,
			clickToPay: clickToPayCoin("btc"),
			coins: [coins.bitcoin],
		},
		{
			name: "Ethereum",
			address: networks.eth.address,
			clickToPay: clickToPayCoin("eth"),
			coins: [coins.ethereum],
		},
		{
			name: "Litecoin",
			address: networks.ltc.address,
			clickToPay: clickToPayCoin("ltc"),
			coins: [coins.litecoin],
		},
	];
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
			{#each cards as card (card.name)}
				<DonateCurrencyCard {...card} />
			{/each}
		</div>
	</SubpageWrapper>
</PageWrapper>
