<script lang="ts">
  let {
    name,
    children
  }: {
    name: string
    children: import('svelte').Snippet
  } = $props()
</script>

<section class="flex flex-col gap-[8px]">
  <div class="flex items-end justify-between px-8">
    <h2 class="font-sf-pro-display text-base leading-[19px] font-semibold tracking-[-0.2px] select-none">
      {name}
    </h2>
    <button
      class="font-sf-pro-display text-thin-typography text-sm font-medium tracking-[-0.2px] hover:underline"
    >
      View all (98)
    </button>
  </div>
  <div class="fade-out-mask scrollbar-thin flex gap-[10px] overflow-scroll px-8 pt-[0.5px] pb-3">
    {@render children()}
  </div>
</section>

<style>
  .fade-out-mask {
    mask: linear-gradient(to right, black 0%, black 90%, transparent 100%);
    mask-size: 200% 100%;
    transition: mask-position-x 0.5s ease-in-out;
  }
  .fade-out-mask:not(:hover) {
    mask-position-x: 100%;
  }
  .fade-out-mask:hover {
    mask-position-x: 20%;
  }
  .scrollbar-thin {
    scrollbar-width: thin;
  }
</style>
