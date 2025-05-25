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
  class={['col-span-1 row-span-1 rounded-[14px]', className]}
  {@attach squircle({ cornerRadius: 14, cornerSmoothing: 1 })}
>
  {@render children?.()}
</div>
