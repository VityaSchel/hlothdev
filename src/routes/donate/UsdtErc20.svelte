<script lang="ts">
	import DonateCurrencyCard from "$lib/features/DonateCurrencyCard.svelte";
	import CoinLogo from "$lib/entities/CoinLogo.svelte";
	import TetherIcon from "$lib/icons/TetherIcon.svelte";
	import EtheriumIcon from "$lib/icons/EtheriumIcon.svelte";
	import { networks, clickToPayToken } from "./consts";
</script>

<DonateCurrencyCard
	name="USDT ERC-20"
	address={networks.eth.address}
	clickToPay={clickToPayToken("usdtErc20")}
>
	{#snippet coins()}
		<CoinLogo><TetherIcon /></CoinLogo>
		<CoinLogo><EtheriumIcon /></CoinLogo>
	{/snippet}
</DonateCurrencyCard>
