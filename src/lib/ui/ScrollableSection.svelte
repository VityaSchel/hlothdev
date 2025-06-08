<script lang="ts">
  let {
    name,
    children,
    childrenCount
  }: {
    name: string
    children: import('svelte').Snippet
    childrenCount: number
  } = $props()

  let scrollX = $state(0)
  let wrap = $state(false)
</script>

<section class="flex flex-col gap-[8px]">
  <div class="flex items-end justify-between px-8">
    <h2
      class="
        font-sf-pro-display text-base leading-[19px] font-semibold
        tracking-[-0.2px] select-none
      "
    >
      {name}
    </h2>
    <button
      class="
        font-sf-pro-display text-sm font-medium tracking-[-0.2px]
        text-thin-typography
        hover:underline
      "
      onclick={() => {
        wrap = !wrap
        scrollX = 0
      }}
    >
      {#if wrap}
        Show Less
      {:else}
        Show All ({childrenCount})
      {/if}
    </button>
  </div>
  <div
    class={[
      'scrollbar-thin gap-[10px] overflow-scroll px-8 pt-[0.5px] pb-3',
      {
        'fade-out-mask': scrollX === 0 && !wrap,
        flex: !wrap,
        'grid grid-cols-1 px450:grid-cols-2 px600:grid-cols-3 md:flex md:flex-wrap': wrap
      }
    ]}
    onscroll={(e) => (scrollX = (e.target as HTMLDivElement).scrollLeft)}
  >
    {@render children()}
  </div>
</section>

<style>
  .fade-out-mask {
    mask: linear-gradient(to right, black 0%, black 90%, transparent 100%);
    mask-size: 200% 100%;
    transition: mask-position 0.5s ease-in-out;
  }
  .fade-out-mask:not(:hover) {
    mask-position: 100% 0%;
  }
  .fade-out-mask:hover {
    mask-position: 20% 0%;
  }
</style>
