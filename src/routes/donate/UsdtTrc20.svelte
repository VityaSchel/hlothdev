<script lang="ts">
	import DonateCurrencyCard from "$lib/features/DonateCurrencyCard.svelte";
	import CoinLogo from "$lib/entities/CoinLogo.svelte";
	import TetherIcon from "$lib/icons/TetherIcon.svelte";
	import TetherIconRendered from "$lib/icons/TetherIcon.svelte?render";
	import TronIcon from "$lib/icons/TronIcon.svelte";
	import TronIconRendered from "$lib/icons/TronIcon.svelte?render";
	import { clickToPayToken, networks } from "./consts";
	import SvgFallback from "$lib/entities/SvgFallback.svelte";
</script>

<DonateCurrencyCard
	preferred
	name="USDT TRC-20"
	address={networks.tron.address}
	clickToPay={clickToPayToken("usdtTrc20")}
>
	{#snippet coins()}
		<CoinLogo>
			<SvgFallback {...TetherIconRendered}>
				<TetherIcon />
			</SvgFallback>
		</CoinLogo>
		<CoinLogo>
			<SvgFallback {...TronIconRendered}>
				<TronIcon />
			</SvgFallback>
		</CoinLogo>
	{/snippet}
</DonateCurrencyCard>
