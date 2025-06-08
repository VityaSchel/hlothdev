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
    gap-[2px] px-4 font-sf-pro
    md:px-8
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
