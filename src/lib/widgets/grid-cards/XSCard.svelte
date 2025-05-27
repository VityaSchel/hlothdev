<script lang="ts">
  import { squircle } from '$lib/squircle'

  let {
    class: className,
    children,
    bg,
  }: {
    class?: import('svelte/elements').SvelteHTMLElements['div']['class']
    children?: import('svelte').Snippet
    bg?: boolean
  } = $props()
</script>

<div
  class={['col-span-1 row-span-1 rounded-[14px]', className, { bg }]}
  {@attach squircle({ cornerRadius: 14, cornerSmoothing: 1 })}
>
  {@render children?.()}
</div>

<style>
  .bg {
    background-image: var(--bg);
  }
</style>
