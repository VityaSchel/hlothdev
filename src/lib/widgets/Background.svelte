<script lang="ts">
  let {
    children
  }: {
    children: import('svelte').Snippet
  } = $props()
</script>

<div class="page-background fixed top-0 left-0 w-full select-none" aria-hidden="true">
  <img
    class="absolute top-0 left-0 h-full w-full object-cover text-[0px]"
    src="/bg.webp"
    alt="Background image"
    aria-hidden="true"
  />
</div>
<div
  class="
    page-container no-py-when-short relative flex w-full flex-col items-center
    justify-center gap-[2px] p-3 pb-2 font-sf-pro
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
  @media (max-height: 250px) {
    .no-py-when-short {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  .page-background {
    height: 100vh;
  }
  @supports (height: 100lvh) {
    .page-background {
      height: 100lvh;
    }
  }
</style>
