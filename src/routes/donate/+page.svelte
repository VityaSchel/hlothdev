<script>
  import DonateCurrencyCard from '$lib/features/DonateCurrencyCard.svelte'
  import PageWrapper from '$lib/widgets/PageWrapper.svelte'
  import CoinLogo from '$lib/entities/CoinLogo.svelte'
  import TetherIcon from '$lib/icons/TetherIcon.svelte'
  import TronIcon from '$lib/icons/TronIcon.svelte'
  import MoneroIcon from '$lib/icons/MoneroIcon.svelte'
  import EtheriumIcon from '$lib/icons/EtheriumIcon.svelte'
  import BitcoinIcon from '$lib/icons/BitcoinIcon.svelte'
  import LitecoinIcon from '$lib/icons/LitecoinIcon.svelte'
</script>

<PageWrapper title="donate.svelte">
  <div class="grid h-full grid-cols-3 grid-rows-2 gap-[25px]">
    <DonateCurrencyCard name="USDT TRC-20" address="THgEkWLWJsLFJ5FfQFCasF1zbwJNLHyrkF" preferred>
      {#snippet coins()}
        <CoinLogo><TetherIcon /></CoinLogo>
        <CoinLogo><TronIcon /></CoinLogo>
      {/snippet}
    </DonateCurrencyCard>
    <DonateCurrencyCard name="USDT ERC-20" address="0xE3e548ae4f1f74195857084ED335EF89C29Ce43c">
      {#snippet coins()}
        <CoinLogo><TetherIcon /></CoinLogo>
        <CoinLogo><EtheriumIcon /></CoinLogo>
      {/snippet}
    </DonateCurrencyCard>
    <DonateCurrencyCard
      name="Monero"
      address="43MTCc7BsyZip4YUpRSqGahUPf8NefifvW6KXEXttTXicTbMfAehtny26HuU84pzQNQmodxzWoTaPAL5aqPjAUo4DtkvXBV"
    >
      {#snippet coins()}
        <MoneroIcon />
      {/snippet}
    </DonateCurrencyCard>
    <DonateCurrencyCard name="Bitcoin" address="bc1q6l065yaa6zc2p4798rc9fcyud8mmny8sk8995f">
      {#snippet coins()}
        <BitcoinIcon />
      {/snippet}
    </DonateCurrencyCard>
    <DonateCurrencyCard name="Etherium" address="0xE3e548ae4f1f74195857084ED335EF89C29Ce43c">
      {#snippet coins()}
        <EtheriumIcon />
      {/snippet}
    </DonateCurrencyCard>
    <DonateCurrencyCard name="Litecoin" address="ltc1qnvzl0zgcg22tm269a6ny95ept93l6009348y3c">
      {#snippet coins()}
        <LitecoinIcon />
      {/snippet}
    </DonateCurrencyCard>
  </div>
</PageWrapper>
