<script>
  import PageWrapper from '$lib/widgets/PageWrapper.svelte'
  import SubpageWrapper from '$lib/widgets/SubpageWrapper.svelte'
  import UsdtTrc20 from './UsdtTrc20.svelte'
  import UsdtErc20 from './UsdtErc20.svelte'
  import Monero from './Monero.svelte'
  import Bitcoin from './Bitcoin.svelte'
  import Etherium from './Etherium.svelte'
  import Litecoin from './Litecoin.svelte'
</script>

<PageWrapper viewId="donate">
  <SubpageWrapper title="donate.svelte" backUrl="/" button={{
    text: 'Open PGP Signed List',
    href: '/donate-pgp-signed.txt'
  }}>
    <div class="grid h-full grid-cols-3 grid-rows-2 gap-[25px]">
      <UsdtTrc20 />
      <UsdtErc20 />
      <Monero />
      <Bitcoin />
      <Etherium />
      <Litecoin />
    </div>
  </SubpageWrapper>
</PageWrapper>
