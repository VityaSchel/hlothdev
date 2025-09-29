<script lang="ts">
	import CoinLogo from "$lib/entities/CoinLogo.svelte";
	import SvgFallback from "$lib/entities/SvgFallback.svelte";
	import DonateCurrencyCard from "$lib/features/DonateCurrencyCard.svelte";
	import MoneroIcon from "$lib/icons/MoneroIcon.svelte";
	import MoneroIconRendered from "$lib/icons/MoneroIcon.svelte?render";
	import { moneroAddress } from "./consts";
</script>

<DonateCurrencyCard
	name="Monero"
	address={moneroAddress}
	clickToPay={{
		ledgerLive: `ledgerlive://send?currency=monero&recipient=${moneroAddress}`,
		monero: `monero:${moneroAddress}`,
	}}
>
	{#snippet coins()}
		<CoinLogo>
			<SvgFallback {...MoneroIconRendered}>
				<MoneroIcon />
			</SvgFallback>
		</CoinLogo>
	{/snippet}
</DonateCurrencyCard>
