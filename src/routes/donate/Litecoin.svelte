<script lang="ts">
  import DonateCurrencyCard from '$lib/features/DonateCurrencyCard.svelte'
  import LitecoinIcon from '$lib/icons/LitecoinIcon.svelte'
  import { clickToPayCoin, networks } from './consts'
</script>

<DonateCurrencyCard
  name="Litecoin"
  address={networks.ltc.address}
  clickToPay={clickToPayCoin('ltc')}
>
  {#snippet coins()}
    <LitecoinIcon />
  {/snippet}
</DonateCurrencyCard>
