<script lang="ts">
  let {
    button,
    title,
    children
  }: {
    button?: string
    title: string
    children?: import('svelte').Snippet
  } = $props()
</script>

<div class="flex h-full w-full flex-col">
  <header
    class="border-px flex h-[52px] w-full shrink-0 items-center justify-between border border-x-0 border-t-0 border-white/25 px-[15px] py-[12px]"
  >
    <div class="ml-[3px] flex flex-row items-center gap-2">
      <button></button>
      <div class="flex flex-row items-center gap-1 text-[15px] font-semibold">
        <span></span>
        <span class="select-none">
          {title}
        </span>
      </div>
    </div>
    {#if button}
      <button class="rounded-md border border-[#8a8070] px-[7px] py-[3px] text-[13px]">
        {button}
      </button>
    {/if}
  </header>
  <div class="p-[25px] flex-1 max-h-[calc(100%-52px)]">
    {@render children?.()}
  </div>
</div>
