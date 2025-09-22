<script lang="ts">
	import DonateCurrencyCard from "$lib/features/DonateCurrencyCard.svelte";
	import CoinLogo from "$lib/entities/CoinLogo.svelte";
	import TetherIcon from "$lib/icons/TetherIcon.svelte";
	import TronIcon from "$lib/icons/TronIcon.svelte";
	import { clickToPayToken, networks } from "./consts";
</script>

<DonateCurrencyCard
	preferred
	name="USDT TRC-20"
	address={networks.tron.address}
	clickToPay={clickToPayToken("usdtTrc20")}
>
	{#snippet coins()}
		<CoinLogo><TetherIcon /></CoinLogo>
		<CoinLogo><TronIcon /></CoinLogo>
	{/snippet}
</DonateCurrencyCard>
