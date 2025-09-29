<script>
	import CoinLogo from "$lib/entities/CoinLogo.svelte";
	import DonateCurrencyCard from "$lib/features/DonateCurrencyCard.svelte";
	import EtheriumIcon from "$lib/icons/EtheriumIcon.svelte";
	import EtheriumIconRendered from "$lib/icons/EtheriumIcon.svelte?render";
	import { clickToPayCoin, networks } from "./consts";
	import SvgFallback from "$lib/entities/SvgFallback.svelte";
</script>

<DonateCurrencyCard
	name="Etherium"
	address={networks.eth.address}
	clickToPay={clickToPayCoin("eth")}
>
	{#snippet coins()}
		<CoinLogo>
			<SvgFallback {...EtheriumIconRendered}>
				<EtheriumIcon />
			</SvgFallback>
		</CoinLogo>
	{/snippet}
</DonateCurrencyCard>
