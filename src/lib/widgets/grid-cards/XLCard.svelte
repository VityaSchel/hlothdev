<script lang="ts" generics="T extends keyof import('svelte/elements').SvelteHTMLElements">
  import { squircle } from '$lib/squircle'

  let {
    tag = 'div' as T,
    class: className,
    children,
    bg,
    viewId,
    ...props
  }: {
    tag?: T
    children?: import('svelte').Snippet
    bg?: string
    viewId?: string
  } & import('svelte/elements').SvelteHTMLElements[T] = $props()
</script>

<svelte:element
  this={tag}
  {...props}
  class={['bg bg-neutral-200] col-span-3 row-span-3 rounded-[55px]', className]}
  style:--bg={bg}
  style:view-transition-name={viewId}
  {@attach squircle({ cornerRadius: 55, cornerSmoothing: 0.6 })}
>
  {@render children?.()}
</svelte:element>

<style>
  .bg {
    background-image: var(--bg);
  }
</style>
