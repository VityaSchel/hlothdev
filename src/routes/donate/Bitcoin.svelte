<script lang="ts">
  import DonateCurrencyCard from '$lib/features/DonateCurrencyCard.svelte'
  import BitcoinIcon from '$lib/icons/BitcoinIcon.svelte'
  import { clickToPayCoin, networks } from './consts'
</script>

<DonateCurrencyCard
  name="Bitcoin"
  address={networks.btc.address}
  clickToPay={clickToPayCoin('btc')}
>
  {#snippet coins()}
    <BitcoinIcon />
  {/snippet}
</DonateCurrencyCard>
