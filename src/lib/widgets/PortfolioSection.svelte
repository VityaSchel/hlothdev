<script lang="ts">
  let { children }: { children: import('svelte').Snippet } = $props()

  let scrollY = $state(0)
</script>

<div
  class={[
    'flex flex-1 flex-col gap-[5px] overflow-auto border border-x-0 border-b-0 transition-colors pb-4 rounded-b-[32px]',
    {
      'border-transparent': scrollY === 0,
      'border-white/10': scrollY > 0
    }
  ]}
  onscroll={(e) => (scrollY = (e.target as HTMLDivElement).scrollTop)}
>
  {@render children()}
</div>
