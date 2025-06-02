<script lang="ts" generics="T extends keyof import('svelte/elements').SvelteHTMLElements">
  import { squircle } from '$lib/squircle'

  let {
    tag = 'div' as T,
    class: className,
    children,
    ...props
  }: {
    tag?: T
    class?: import('svelte/elements').SvelteHTMLElements['div']['class']
    children?: import('svelte').Snippet
  } & import('svelte/elements').SvelteHTMLElements[T] = $props()
</script>

<svelte:element
  this={tag}
  class={[
    'bg col-span-2 row-span-2 rounded-[13px] bg-neutral-200 px-[15px] py-[13px] text-black',
    className
  ]}
  {...props}
  {@attach squircle({ cornerRadius: 13, cornerSmoothing: 0.6 })}
>
  {@render children?.()}
</svelte:element>

<style>
  .bg {
    background-image: var(--bg);
  }
</style>
