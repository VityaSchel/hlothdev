<script lang="ts">
  import { page } from '$app/state'
  import '@fontsource-variable/sofia-sans-extra-condensed'
  import LgCard from '$lib/widgets/grid-cards/LGCard.svelte'
  import Button from '$lib/ui/Button.svelte'

  let {
    inert,
    children
  }: {
    inert?: boolean
    children?: import('svelte').Snippet
  } = $props()

  let expanded = $derived(page.route.id === '/me/privacy-rights' && !inert)
</script>

<LgCard
  class={[
    'container-size group overflow-clip bg-cover',
    {
      'absolute top-0 left-0 z-[1] col-span-full col-start-1 row-span-full row-start-1 h-full w-full':
        expanded,
      'relative col-start-1 col-end-3 row-start-9 row-end-11 px580:col-start-4 px580:col-end-6 px580:row-start-2 px580:row-end-4 md:col-start-7 md:col-end-9 md:row-start-1 md:row-end-3':
        !expanded
    }
  ]}
  viewId={inert ? undefined : 'privacy-rights'}
  data-nosnippet={inert ? '' : undefined}
  {inert}
  cornerRadius={expanded ? 13 : 0.05118110236}
>
  <img
    src="/privacy-rights.webp"
    class="
      absolute top-0 left-0 h-full w-full object-cover object-[30%] select-none
    "
    alt="Background: a surveillance camera mounted on a wall"
    style={inert ? undefined : 'view-transition-name: privacy-rights-content-ignore'}
  />
  {#if expanded}
    {@render children?.()}
  {:else}
    <div
      class="
        relative z-[1] flex h-full flex-col justify-end gap-[2.36cqw]
        px-[5.90cqw] py-[5.11cqw]
      "
      style:view-transition-name={inert ? undefined : 'privacy-rights-content'}
    >
      <span
        class="
          mb-auto text-[3.54cqw] tracking-[-0.011cqw] text-[#5D5D5D] opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
          has-focus-within:opacity-100
          no-hover:opacity-100
        "
      >
        Photo by <a
          href="https://unsplash.com/@srhhrbch"
          class="font-medium"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          Siarhei Horbach
        </a>
      </span>
      <h3
        class="
          font-extra-condensed text-[7.87cqw] leading-5 font-extrabold
          tracking-[-0.236cqw] uppercase
        "
      >
        Privacy Rights
      </h3>
      <p
        class="
          pb-[3.54cqw] text-[4.33cqw] leading-[5.11cqw] font-semibold
          tracking-[-0.3cqw]
          @px170:tracking-[-0.25cqw]
          @px215:tracking-[-0.2cqw]
          @px239:tracking-[-0.19cqw]
        "
      >
        I advocate for privacy and prefer selfhosting over SAAS. All my personal websites are
        available in lokinet under hloth.loki domain.
      </p>
      <a href="/me/privacy-rights" class="flex w-full rounded-lg focus-xl" draggable="false">
        <Button class="h-[10.68cqh]" variant="md" tabindex={-1}>Learn about my commitment</Button>
      </a>
    </div>
  {/if}
</LgCard>
