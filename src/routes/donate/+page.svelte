<script>
  import PageWrapper from '$lib/widgets/PageWrapper.svelte'
  import UsdtTrc20 from './UsdtTrc20.svelte'
  import UsdtErc20 from './UsdtErc20.svelte'
  import Monero from './Monero.svelte'
  import Bitcoin from './Bitcoin.svelte'
  import Etherium from './Etherium.svelte'
  import Litecoin from './Litecoin.svelte'
</script>

<PageWrapper title="donate.svelte" backUrl="/">
  <div class="grid h-full grid-cols-3 grid-rows-2 gap-[25px]">
    <UsdtTrc20 />
    <UsdtErc20 />
    <Monero />
    <Bitcoin />
    <Etherium />
    <Litecoin />
  </div>
</PageWrapper>
