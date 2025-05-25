<script lang="ts">
  let {
    children,
    variant = 'xl',
    class: className = '',
    ...props
  }: {
    variant?: 'xl' | 'sm'
    children: import('svelte').Snippet
    class: import('svelte/elements').SvelteHTMLElements['button']['class']
  } & import('svelte/elements').SvelteHTMLElements['button'] = $props()
</script>

<button
  class={[
    {
      'flex h-15 items-center justify-center rounded-[30px] bg-white text-[19px] font-bold tracking-[-0.2px] text-black':
        variant === 'xl',
      'rounded-[20px] bg-white': variant === 'sm'
    },
    className
  ]}
  {...props}
>
  {@render children()}
</button>
