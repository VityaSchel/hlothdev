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
    'col-span-2 row-span-2 rounded-[13px] bg-neutral-200 px-[15px] py-[13px] text-black bg',
    className
  ]}
  {@attach squircle({ cornerRadius: 13, cornerSmoothing: 0.6 })}
>
  {@render children?.()}
</div>

<style>
  .bg {
    background-image: var(--bg);
  }
</style>
