<script lang="ts" generics="T extends keyof import('svelte/elements').SvelteHTMLElements">
  import { squircle } from '$lib/squircle'

  let {
    tag = 'div' as T,
    class: className,
    children,
    viewId,
    ...props
  }: {
    tag?: T
    children?: import('svelte').Snippet
    viewId?: string
  } & import('svelte/elements').SvelteHTMLElements[T] = $props()
</script>

<svelte:element
  this={tag}
  class={['bg col-span-2 row-span-2 rounded-[13px] text-black', className]}
  style:view-transition-name={viewId}
  {...props}
  {@attach squircle({ cornerRadius: 13, cornerSmoothing: 0.6 })}
>
  <!-- bg-neutral-200 -->
  {@render children?.()}
</svelte:element>

<style>
  .bg {
    background-image: var(--bg);
  }
</style>
