<script lang="ts">
  import { page } from '$app/state'
  import XlCard from '$lib/widgets/grid-cards/XLCard.svelte'
  import WavingHandIcon from '$lib/icons/WavingHandIcon.svelte'
  import Button from '$lib/ui/Button.svelte'

  let {
    inert,
    children
  }: {
    inert?: boolean
    children?: import('svelte').Snippet
  } = $props()

  let expanded = $derived(page.route.id === '/me/about' && !inert)
</script>

<XlCard
  class={[
    'container-size h-full w-full overflow-clip text-black',
    {
      'absolute top-0 left-0 z-[1] col-span-full col-start-1 row-span-full row-start-1 h-full w-full':
        expanded,
      'col-start-1 col-end-4 row-start-1 row-end-4': !expanded
    }
  ]}
  bg="radial-gradient(circle farthest-side at 89% 63%,rgb(204, 123, 241),rgb(208, 138, 240) 12.019%,rgb(228, 208, 233) 34.615%,rgb(225, 212, 231) 51.923%,rgb(226, 206, 236) 59.135%,rgb(226, 206, 236) 77.885%,rgb(232, 232, 232) 100%);"
  viewId={inert ? undefined : 'about-me'}
  data-nosnippet={inert ? '' : undefined}
  {inert}
  cornerRadius={expanded ? 55 : 0.1375}
>
  {#if expanded}
    {@render children?.()}
  {:else}
    <div
      class="
        flex h-full w-full flex-col justify-between px-[8.22cqw] py-[8.74cqw]
        text-black
      "
      style:view-transition-name={inert ? undefined : 'about-me-content'}
    >
      <span
        class="
          h-[11.05cqw] w-[11.05cqw] shrink-0 rounded-full bg-black p-[2.05cqw]
        "
      >
        <span
          class="
            animate-rotate flex h-full w-full items-center justify-center
            text-[4.13cqw]
            [&_svg]:w-full
          "
        >
          <WavingHandIcon />
        </span>
      </span>
      <h1
        class="
          one-storey-a text-[10cqw] leading-[10cqw] font-bold
          tracking-[0.089cqw]
        "
      >
        Hi, I’m Viktor, and my life is a roller coaster!
      </h1>
      <a href="/me/about" class="flex w-full rounded-[7.71cqw]" draggable="false">
        <Button tabindex={-1} class="h-[15cqh]">
          <svg
            width="38cqh"
            height="38cqh"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.16663 11.5H20.8333M20.8333 11.5L11.5 2.16666M20.8333 11.5L11.5 20.8333"
              stroke="black"
              stroke-width="2.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Read more
        </Button>
      </a>
    </div>
  {/if}
</XlCard>

<style>
  .animate-rotate {
    animation: rotate 1s cubic-bezier(0.61, 1, 0.88, 1);
    transform-origin: 73% 80%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(-15deg);
    }
    40% {
      transform: rotate(15deg);
    }
    60% {
      transform: rotate(-15deg);
    }
    80% {
      transform: rotate(15deg);
    }
    95% {
      transform: rotate(0deg);
    }
  }
</style>
