<script lang="ts">
  let {
    children
  }: {
    children: import('svelte').Snippet
  } = $props()
</script>

<div class="fixed top-0 left-0 h-full w-full select-none">
  <img class="absolute top-0 left-0 h-full w-full object-cover" src="/bg.webp" alt="" />
</div>
<div
  class="
    page-container relative flex w-full flex-col items-center justify-center
    gap-[2px] p-3 pb-2 font-sf-pro
    md:p-8 md:pb-5
  "
>
  {@render children()}
</div>

<style lang="scss">
  .page-container {
    height: 100vh;
  }
  @supports (height: 100dvh) {
    .page-container {
      height: 100dvh;
    }
  }
</style>
