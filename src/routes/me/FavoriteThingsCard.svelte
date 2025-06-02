<script lang="ts">
  import { browser } from '$app/environment'
  import { transition } from '$lib/utils'
  import { getSvgPath } from 'figma-squircle'
  import { onMount } from 'svelte'

  let width = $state(0)
  let height = $state(0)
  let clipPath = $derived.by(() => {
    if (!width || !height) return ''
    return getSvgPath({
      cornerSmoothing: 0.6,
      cornerRadius: 32,
      width,
      height
    })
  })

  const clipPathStyle = $derived(clipPath ? `clip-path: path('${clipPath}')` : undefined)

  const images = [
    ['favorite-things', 'Scroll to see my favorite things ➜'],
    ['games', 'I love puzzle platformers, survival horrors and adventure sandboxes'],
    ['cinema', 'I love criminals, dramas and detectives'],
    ['music', 'Pop is always in my playlist'],
    ['dish', 'The best Tom Yum I tasted was in my  home city local bar'],
    ['influencer', 'I admire Jerma985 unique personality and love watching his livestreams'],
    ['book', 'Steve Krug — Don’t make me think is a must-read for all web designers'],
    ['series', 'Severance is my favorite TV series'],
    ['quote', 'My favorite quote is one of my own'],
    ['love', 'But my most favorite thing in life is love']
  ]

  let scroll = $state(0)
  let scrollContainer: HTMLDivElement
  onMount(() => (scroll = scrollContainer.scrollLeft))
  let cardInViewport = $derived(scroll / (width + 1))
</script>

<div
  class="group relative col-span-2 row-span-1 rounded-4xl text-white"
  bind:clientWidth={width}
  bind:clientHeight={height}
  style={clipPathStyle}
>
  <div
    class="scrollbar-invisible absolute top-0 left-0 flex h-full w-full snap-x snap-mandatory gap-px overflow-auto"
    bind:this={scrollContainer}
    onscroll={() => (scroll = scrollContainer.scrollLeft)}
  >
    {#snippet img(src: string, alt: string)}
      <div class="animate-scroll h-full w-full shrink-0 snap-center overflow-clip">
        <img
          src="/favorite-things/{src}.webp"
          {alt}
          class="h-full w-full shrink-0 rounded-4xl object-cover"
          style={clipPathStyle}
        />
      </div>
    {/snippet}
    {#each images as [src, alt], i (i)}
      {@render img(src, alt)}
    {/each}
  </div>
  {#if browser}
    <div
      class="absolute bottom-[5px] z-[1] flex h-[2px] w-full items-center justify-center gap-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      {#each images, i}
        <span
          class="h-[2px] w-[2px] rounded-full backdrop-blur-3xl"
          style="background-color: rgba(246, 246, 246, {transition(
            0.3,
            0.72,
            Math.max(0, 1 - Math.abs(cardInViewport - i))
          )})"
        ></span>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .scrollbar-invisible {
    scrollbar-width: none;
  }
  @supports (animation-timeline: view(x)) {
    .animate-scroll {
      animation-timeline: view(x);
      view-timeline-name: --timeline_name;
      view-timeline-axis: x;

      img {
        animation-timeline: --timeline_name;
        view-timeline-axis: x;
        animation-name: appear;
        animation-direction: alternate;
        animation-fill-mode: both;
        animation-duration: 1ms;
      }
    }
    @keyframes appear {
      0% {
        transform: scale(0.85);
      }

      50% {
        transform: scale(1);
      }

      100% {
        transform: scale(0.85);
      }
    }
  }
</style>
