<script>
	import DonateCurrencyCard from "$lib/features/DonateCurrencyCard.svelte";
	import EtheriumIcon from "$lib/icons/EtheriumIcon.svelte";
	import { clickToPayCoin, networks } from "./consts";
</script>

<DonateCurrencyCard
	name="Etherium"
	address={networks.eth.address}
	clickToPay={clickToPayCoin("eth")}
>
	{#snippet coins()}
		<EtheriumIcon />
	{/snippet}
</DonateCurrencyCard>
