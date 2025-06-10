<script lang="ts">
  let { children }: { children: import('svelte').Snippet } = $props()

  let scrollY = $state(0)
</script>

<div
  class={[
    `
      no-scroll-when-wide flex flex-1 flex-col justify-evenly gap-[5px]
      rounded-b-[32px] border border-x-0 border-b-0 pb-4 transition-colors
      md:overflow-auto
    `,
    {
      'border-transparent': scrollY === 0,
      'border-white/10': scrollY > 0
    }
  ]}
  onscroll={(e) => (scrollY = (e.target as HTMLDivElement).scrollTop)}
>
  {@render children()}
</div>
