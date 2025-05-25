<script lang="ts">
  import DonateCurrencyCard from '$lib/features/DonateCurrencyCard.svelte'
  import MoneroIcon from '$lib/icons/MoneroIcon.svelte'
  import { moneroAddress } from './consts'
</script>

<DonateCurrencyCard
  name="Monero"
  address={moneroAddress}
  clickToPay={{
    ledgerLive: `ledgerlive://send?currency=monero&recipient=${moneroAddress}`,
    monero: `monero:${moneroAddress}`
  }}
>
  {#snippet coins()}
    <MoneroIcon />
  {/snippet}
</DonateCurrencyCard>
