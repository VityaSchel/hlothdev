<script lang="ts">
  let {
    link,
    icon,
    name,
    preferred
  }: {
    link: string
    icon: import('svelte').Snippet
    name: string
    preferred?: boolean
  } = $props()
</script>

<a
  href={link}
  target="_blank"
  rel="nofollow noopener noreferrer"
  class="relative flex flex-col items-center justify-center gap-1 rounded-md border border-[#bbbbbf] bg-white px-4 py-2 text-center text-sm font-medium tracking-tight flex-1"
>
  <span class="h-7 w-7 flex justify-center items-end [&_svg]:w-full [&_svg]:h-full">{@render icon()}</span>
  <span>{name}</span>
  {#if preferred}
    <span
      class="shadow-badge absolute top-0 left-0 z-[1] h-[18px] w-[60px] -translate-x-1/4 -translate-y-2/3 rounded-full bg-[#FF3B30] text-[10px] leading-[18px] font-medium text-white"
    >
      Preferred
    </span>
  {/if}
</a>

<style>
  .shadow-badge {
    box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.25);
  }
</style>
