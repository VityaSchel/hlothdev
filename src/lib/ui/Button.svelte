<script lang="ts">
  let {
    children,
    variant = 'xl',
    class: className = '',
    ...props
  }: {
    variant?: 'xl' | 'md'
    children: import('svelte').Snippet
    class?: import('svelte/elements').ClassValue
  } & import('svelte/elements').SvelteHTMLElements['button'] = $props()
</script>

<div
  class={[
    'container-size w-full text-black select-none',
    {
      'h-15 rounded-full': variant === 'xl',
      'h-7': variant === 'md'
    },
    className
  ]}
>
  <button
    class={[
      `
        flex h-full w-full cursor-default items-center justify-center bg-white
        select-none
      `,
      {
        'text-[31.6cqh] gap-[40cqh] font-bold tracking-[-0.2px] rounded-full': variant === 'xl',
        'text-[42.8cqh] font-bold tracking-[-0.5px] small-caps rounded-[28cqh]': variant === 'md'
      }
    ]}
    {...props}
  >
    {@render children()}
  </button>
</div>
