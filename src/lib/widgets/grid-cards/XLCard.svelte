<script lang="ts">
  import { squircle } from '$lib/squircle'

  let {
    class: className,
    children,
    bg,
    viewId
  }: {
    class?: import('svelte/elements').SvelteHTMLElements['div']['class']
    children?: import('svelte').Snippet
    bg?: string
    viewId?: string
  } = $props()
</script>

<div
  class={[
    'bg col-span-3 row-span-3 rounded-[55px] bg-neutral-200 px-8 py-[34px]',
    className
  ]}
  style:--bg={bg}
  style:view-transition-name={viewId}
  {@attach squircle({ cornerRadius: 55, cornerSmoothing: 0.6 })}
>
  {@render children?.()}
</div>

<style>
  .bg {
    background-image: var(--bg);
  }
</style>
