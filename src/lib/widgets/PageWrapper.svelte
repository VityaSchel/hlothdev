<script lang="ts">
  import Squircle from '$lib/Squircle.svelte'

  let {
    children,
    viewId
  }: {
    children: import('svelte').Snippet
    viewId?: string
  } = $props()
</script>

<main
  class="
    drop-background-shadow relative min-h-0 w-[1384px] max-w-full flex-1
    shrink-0 rounded-[32px] backdrop-blur-[48px]
    md:max-h-[645px]
  "
  style={viewId ? `view-transition-name: ${viewId};` : undefined}
>
  <Squircle class="bg-thick" innerStrokeWidth={2}>
    {@render children()}
  </Squircle>
</main>

<style>
  .drop-background-shadow {
    box-shadow: 0 14px 80px 0 rgba(0, 0, 0, 0.6);
  }
</style>
