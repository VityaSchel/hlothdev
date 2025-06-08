<script lang="ts">
  import LedgerLiveIcon from '$lib/icons/LedgerLiveIcon.svelte'
  import MetaMaskIcon from '$lib/icons/MetaMaskIcon.svelte'
  import MoneroIcon from '$lib/icons/MoneroIcon.svelte'
  import TrustWalletIcon from '$lib/icons/TrustWalletIcon.svelte'
  import SquircleThick from '$lib/SquircleThick.svelte'

  type ClickToPay = {
    trustWallet?: string
    metamask?: string
    ledgerLive?: string
    monero?: string
  }

  let {
    preferred,
    name,
    address,
    coins,
    clickToPay
  }: {
    preferred?: boolean
    coins: import('svelte').Snippet
    name: string
    address: string
    clickToPay?: ClickToPay
  } = $props()

  // I thought about using interpolate-size but 1) it's only implemented in Chrome/Edge
  // and 2) it does not work with text-overflow: ellipsis

  let addressHeight: number = $state(0)
  let clickToPayHeight: number = $state(0)
  let collapseAddress = $state(true)
</script>

<SquircleThick class="bg-[#242424]/40" translucent>
  <div
    class="
      group flex h-[253px] shrink-0 flex-col rounded-[30px] p-8
      px630:h-[285px]
      px680:h-[275px]
      md:h-[253px]
      px870:h-full px870:shrink
    "
  >
    <div class="coins min-h-0 flex-1 overflow-clip">
      <div class="flex h-[68px]">
        {@render coins()}
      </div>
    </div>
    <div class="max-h-full w-full shrink-0 flex-col gap-0 overflow-clip">
      {#if preferred}
        <span
          class="
            980px:text-lg 980px:leading-8
            text-[23px] leading-7 font-medium tracking-[-0.5px] text-white/30
            px870:text-sm px870:leading-4
            px1100:text-[23px] px1100:leading-7
          "
        >
          PREFERRED
        </span>
      {/if}
      <div
        class="
          flex items-center
          px680:h-[40px]
          px870:h-auto
          px980:h-[46px]
        "
      >
        <span
          class="
            h-full text-2xl font-bold text-white
            px680:text-[32px]
            px870:text-3xl
            px1100:text-[35.5px]
          "
        >
          {name}
        </span>
      </div>
      <div class="flex w-full items-end pt-1.5">
        <div
          class="
            interpolate-size relative h-[21px] w-full overflow-hidden font-mono
            text-sm leading-5 font-semibold tracking-[-0.2px] break-all
            text-ellipsis text-white/60 transition-[height] duration-300
            select-all
            group-hover:h-[var(--address-height)]
            px420:text-[17px] px420:leading-6
            px870:text-sm px870:leading-5
            px1100:text-[17px]
            px1380:leading-6
          "
          style="--address-height: {addressHeight ? `${addressHeight}px` : 'auto'}"
          ontransitionstart={() => (collapseAddress = false)}
          ontransitionend={() => (collapseAddress = true)}
        >
          <span class={{ 'not-group-hover:whitespace-nowrap': collapseAddress }}>
            {address}
          </span>
          <span
            class="pointer-events-none absolute top-0 left-0 w-full opacity-0"
            bind:offsetHeight={addressHeight}
          >
            {address}
          </span>
        </div>
      </div>
      {#if clickToPay}
        <div
          class="
            hidden h-0 shrink-0 overflow-clip transition-[height] duration-300
            group-hover:h-[47px]
            px320:block
            px980:group-hover:h-[58px]
          "
        >
          <div class="flex shrink-0 items-center pt-4" bind:offsetHeight={clickToPayHeight}>
            {#each Object.entries(clickToPay) as [key, value] (key)}
              {@const name = key as keyof ClickToPay}
              <a
                href={value}
                class="
                  safari-fix-svgs-please flex h-[29px] w-auto px-2
                  px980:h-[40px]
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {#if name === 'metamask'}
                  <MetaMaskIcon />
                {:else if name === 'trustWallet'}
                  <TrustWalletIcon />
                {:else if name === 'ledgerLive'}
                  <LedgerLiveIcon />
                {:else if name === 'monero'}
                  <MoneroIcon />
                {/if}
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
</SquircleThick>

<style>
  .coins {
    mask-image: linear-gradient(to bottom, black 0%, black calc(100% - 20px), transparent 100%);
  }
  .safari-fix-svgs-please :global(svg) {
    height: 100%;
  }
</style>
