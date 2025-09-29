<script lang="ts">
	import CoinLogo from "$lib/entities/CoinLogo.svelte";
	import DonateCurrencyCard from "$lib/features/DonateCurrencyCard.svelte";
	import BitcoinIcon from "$lib/icons/BitcoinIcon.svelte";
	import BitcoinIconRendered from "$lib/icons/BitcoinIcon.svelte?render";
	import { clickToPayCoin, networks } from "./consts";
	import SvgFallback from "$lib/entities/SvgFallback.svelte";
</script>

<DonateCurrencyCard
	name="Bitcoin"
	address={networks.btc.address}
	clickToPay={clickToPayCoin("btc")}
>
	{#snippet coins()}
		<CoinLogo>
			<SvgFallback {...BitcoinIconRendered}>
				<BitcoinIcon />
			</SvgFallback>
		</CoinLogo>
	{/snippet}
</DonateCurrencyCard>
