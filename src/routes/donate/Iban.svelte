<script lang="ts">
	import CoinLogo from "$lib/entities/CoinLogo.svelte";
	import SvgFallback from "$lib/entities/SvgFallback.svelte";
	import DonateCurrencyCard from "$lib/features/DonateCurrencyCard.svelte";
	import IbanIcon from "$lib/icons/IbanIcon.svelte";
	import IbanIconRendered from "$lib/icons/IbanIcon.svelte?render";
	import { iban } from "./consts";
</script>

<DonateCurrencyCard
	name="Iban"
	address={iban}
	subtitle="Swift/BIC code: BBVAESMM"
>
	{#snippet coins()}
		<CoinLogo>
			<SvgFallback {...IbanIconRendered}>
				<IbanIcon />
			</SvgFallback>
		</CoinLogo>
	{/snippet}
</DonateCurrencyCard>
