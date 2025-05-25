<script lang="ts">
  import { squircle } from '$lib/squircle'

  let {
    class: className,
    children
  }: {
    class?: import('svelte/elements').SvelteHTMLElements['div']['class']
    children?: import('svelte').Snippet
  } = $props()
</script>

<div
  class={[
    'bg col-span-3 row-span-1 rounded-4xl bg-neutral-600 p-4 text-[12px] font-semibold tracking-[-0.4px] text-white',
    className
  ]}
  {@attach squircle({ cornerRadius: 32, cornerSmoothing: 0.6 })}
>
  {@render children?.()}
</div>

<style>
  .bg {
    background-image: var(--bg);
  }
</style>
