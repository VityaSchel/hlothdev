<script lang="ts">
  import SquircleThick from '$lib/SquircleThick.svelte'

  let {
    preferred,
    name,
    address,
    coins
  }: {
    preferred?: boolean
    coins: import('svelte').Snippet
    name: string
    address: string
  } = $props()

  // I thought about using interpolate-size but 1) it's only implemented in Chrome/Edge and 2) it does not work with text-overflow: ellipsis
</script>

<SquircleThick class="bg-[#242424]/40" translucent>
  <div class="group relative h-full rounded-[30px] p-8">
    <div class="flex h-[68px] overflow-clip duration-300">
      {@render coins()}
    </div>
    <div
      class="absolute bottom-8 left-0 w-full shrink-0 flex-col gap-0 overflow-clip px-8 pt-[19px] bg-black"
    >
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
          class="interpolate-size h-[25.5px] w-full overflow-hidden font-mono text-[17px] font-semibold tracking-[-0.2px] break-all text-ellipsis text-white/60 transition-[height] not-group-hover:whitespace-nowrap group-hover:h-auto"
        >
          {address}
        </span>
      </div>
    </div>
  </div>
</SquircleThick>
