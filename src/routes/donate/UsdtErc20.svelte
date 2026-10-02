<script lang="ts">
	import DonateCurrencyCard from "$lib/features/DonateCurrencyCard.svelte";
	import CoinLogo from "$lib/entities/CoinLogo.svelte";
	import TetherIcon from "$lib/icons/TetherIcon.svelte";
	import TetherIconRendered from "$lib/icons/TetherIcon.svelte?render";
	import EthereumIcon from "$lib/icons/EthereumIcon.svelte";
	import EthereumIconRendered from "$lib/icons/EthereumIcon.svelte?render";
	import { networks, clickToPayToken } from "./consts";
	import SvgFallback from "$lib/entities/SvgFallback.svelte";
</script>

<DonateCurrencyCard
	name="USDT ERC-20"
	address={networks.eth.address}
	clickToPay={clickToPayToken("usdtErc20")}
>
	{#snippet coins()}
		<CoinLogo>
			<SvgFallback {...TetherIconRendered}>
				<TetherIcon />
			</SvgFallback>
		</CoinLogo>
		<CoinLogo>
			<SvgFallback {...EthereumIconRendered}>
				<EthereumIcon />
			</SvgFallback>
		</CoinLogo>
	{/snippet}
</DonateCurrencyCard>
