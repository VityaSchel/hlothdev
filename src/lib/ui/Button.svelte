<script lang="ts">
  let {
    children,
    variant = 'xl',
    class: className = '',
    ...props
  }: {
    variant?: 'xl' | 'md'
    children: import('svelte').Snippet
    class: import('svelte/elements').SvelteHTMLElements['button']['class']
  } & import('svelte/elements').SvelteHTMLElements['button'] = $props()
</script>

<button
  class={[
    {
      'flex h-15 items-center justify-center rounded-[30px] bg-white text-[19px] font-bold tracking-[-0.2px] text-black':
        variant === 'xl',
      'h-7 rounded-lg bg-white text-xs font-bold tracking-[-0.5px]': variant === 'md'
    },
    className
  ]}
  {...props}
>
  {@render children()}
</button>
