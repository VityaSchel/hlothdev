<script lang="ts">
	import CoinLogo from "$lib/entities/CoinLogo.svelte";
	import DonateCurrencyCard from "$lib/features/DonateCurrencyCard.svelte";
	import EthereumIcon from "$lib/icons/EthereumIcon.svelte";
	import EthereumIconRendered from "$lib/icons/EthereumIcon.svelte?render";
	import { clickToPayCoin, networks } from "./consts";
	import SvgFallback from "$lib/entities/SvgFallback.svelte";
</script>

<DonateCurrencyCard
	name="Ethereum"
	address={networks.eth.address}
	clickToPay={clickToPayCoin("eth")}
>
	{#snippet coins()}
		<CoinLogo>
			<SvgFallback {...EthereumIconRendered}>
				<EthereumIcon />
			</SvgFallback>
		</CoinLogo>
	{/snippet}
</DonateCurrencyCard>
