<script lang="ts" generics="T extends keyof import('svelte/elements').SvelteHTMLElements">
  import { squircle } from '$lib/squircle'

  let {
    tag = 'div' as T,
    class: className,
    children,
    bg,
    ...props
  }: {
    tag?: T
    children?: import('svelte').Snippet
    bg?: boolean
  } & import('svelte/elements').SvelteHTMLElements[T] = $props()
</script>

<svelte:element
  this={tag}
  class={['col-span-1 row-span-1 rounded-[14px]', className, { bg }]}
  {...props}
  {@attach squircle({ cornerRadius: 14, cornerSmoothing: 1 })}
>
  {@render children?.()}
</svelte:element>

<style>
  .bg {
    background-image: var(--bg);
  }
</style>
