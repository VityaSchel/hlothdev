<script lang="ts">
	import CoinLogo from "$lib/entities/CoinLogo.svelte";
	import DonateCurrencyCard from "$lib/features/DonateCurrencyCard.svelte";
	import LitecoinIcon from "$lib/icons/LitecoinIcon.svelte";
	import LitecoinIconRendered from "$lib/icons/LitecoinIcon.svelte?render";
	import { clickToPayCoin, networks } from "./consts";
	import SvgFallback from "$lib/entities/SvgFallback.svelte";
</script>

<DonateCurrencyCard
	name="Litecoin"
	address={networks.ltc.address}
	clickToPay={clickToPayCoin("ltc")}
>
	{#snippet coins()}
		<CoinLogo>
			<SvgFallback {...LitecoinIconRendered}>
				<LitecoinIcon />
			</SvgFallback>
		</CoinLogo>
	{/snippet}
</DonateCurrencyCard>
