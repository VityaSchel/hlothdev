<script lang="ts" generics="T extends keyof import('svelte/elements').SvelteHTMLElements">
  import { squircle } from '$lib/squircle'

  let {
    tag = 'div' as T,
    class: className,
    children,
    ...props
  }: {
    tag?: T
    children?: import('svelte').Snippet
  } & import('svelte/elements').SvelteHTMLElements[T] = $props()
</script>

<svelte:element
  this={tag}
  class={[`bg col-span-3 row-span-1 font-semibold text-white`, className]}
  {...props}
  {@attach squircle({ cornerRadius: 0.0822622108, cornerSmoothing: 0.6 })}
>
  {@render children?.()}
</svelte:element>

<style>
  .bg {
    background-image: var(--bg);
  }
</style>
