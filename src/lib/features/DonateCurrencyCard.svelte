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

  // I thought about using interpolate-size but 1) it's only implemented in Chrome/Edge and 2) it does not work with text-overflow: ellipsis
</script>

<SquircleThick class="bg-[#242424]/40" translucent>
  <div class="group flex h-full flex-col rounded-[30px] p-8">
    <div class="coins min-h-0 flex-1 overflow-clip">
      <div class="flex h-[68px] duration-300">
        {@render coins()}
      </div>
    </div>
    <div class="max-h-full w-full shrink-0 flex-col gap-0 overflow-clip">
      {#if preferred}
        <span class="text-[23px] leading-8 font-medium tracking-[-0.5px] text-white/30">
          PREFERRED
        </span>
      {/if}
      <div class="flex h-[46px] items-center">
        <span class="text-[35.5px] font-bold text-white">{name}</span>
      </div>
      <div class="flex w-full items-end pt-1.5">
        <span
          class="interpolate-size h-[25.5px] w-full overflow-hidden font-mono text-[17px] font-semibold tracking-[-0.2px] break-all text-ellipsis text-white/60 transition-[height] select-all not-group-hover:whitespace-nowrap group-hover:h-auto"
        >
          {address}
        </span>
      </div>
      {#if clickToPay}
        <div class="h-0 shrink-0 overflow-clip group-hover:h-auto">
          <div class="flex h-[50px] items-center pt-2">
            {#each Object.entries(clickToPay) as [key, value] (key)}
              {@const name = key as keyof ClickToPay}
              <a
                href={value}
                class="flex h-full w-auto p-1 px-2"
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
    mask-image: linear-gradient(
      to bottom,
      black 0%,
      black calc(100% - 20px),
      transparent calc(100% - 5px),
      transparent 100%
    );
  }
</style>
