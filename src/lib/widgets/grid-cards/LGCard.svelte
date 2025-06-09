<script lang="ts" generics="T extends keyof import('svelte/elements').SvelteHTMLElements">
  import { squircle } from '$lib/squircle'

  let {
    tag = 'div' as T,
    class: className,
    children,
    viewId,
    cornerRadius = 0.05118110236,
    ...props
  }: {
    tag?: T
    children?: import('svelte').Snippet
    viewId?: string
    cornerRadius?: number
  } & import('svelte/elements').SvelteHTMLElements[T] = $props()
</script>

<svelte:element
  this={tag}
  class={['bg col-span-2 row-span-2 text-black', className]}
  style:border-radius={cornerRadius < 1 ? cornerRadius * 100 + '%' : cornerRadius + 'px'}
  style:view-transition-name={viewId}
  {...props}
  {@attach squircle({ cornerRadius, cornerSmoothing: 0.6 })}
>
  <!-- bg-neutral-200 -->
  {@render children?.()}
</svelte:element>

<style>
  .bg {
    background-image: var(--bg);
  }
</style>
