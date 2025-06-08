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
    'group overflow-clip rounded-[13px] bg-cover',
    {
      'absolute top-0 left-0 z-[1] col-span-full col-start-1 row-span-full row-start-1 h-full w-full':
        expanded,
      'relative col-start-7 col-end-9 row-start-1 row-end-3': !expanded
    }
  ]}
  viewId={inert ? undefined : 'privacy-rights'}
  data-nosnippet={inert ? '' : undefined}
  {inert}
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
        relative z-[1] flex h-full flex-col justify-end gap-[6px] px-[15px]
        py-[13px]
      "
      style:view-transition-name={inert ? undefined : 'privacy-rights-content'}
    >
      <span
        class="
          mb-auto text-[9px] tracking-[-0.03px] text-[#5D5D5D] opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
          has-focus-within:opacity-100
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
          font-extra-condensed text-[20px] leading-5 font-extrabold
          tracking-[-0.6px] uppercase
        "
      >
        Privacy Rights
      </h3>
      <p
        class="
          pb-[9px] text-[11px] leading-[13px] font-semibold tracking-[-0.5px]
        "
      >
        I advocate for privacy and prefer selfhosting over SAAS. All my personal websites are
        available in lokinet under hloth.loki domain.
      </p>
      <a href="/me/privacy-rights" class="flex w-full rounded-lg" draggable="false">
        <Button variant="md" class="small-caps w-full select-none">
          Learn about my commitment
        </Button>
      </a>
    </div>
  {/if}
</LgCard>
