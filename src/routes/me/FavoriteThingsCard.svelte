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
      cornerRadius: 0.125984252 * width,
      width,
      height
    })
  })

  const clipPathStyle = $derived(clipPath ? `clip-path: path('${clipPath}')` : undefined)

  const images: { img: string; alt: string; href?: string }[] = [
    { img: 'favorite-things', alt: 'Scroll to see my favorite things ➜' },
    { img: 'games', alt: 'I love puzzle platformers, survival horrors and adventure sandboxes' },
    { img: 'cinema', alt: 'I love criminals, dramas and detectives' },
    { img: 'music', alt: 'Pop is always in my playlist' },
    { img: 'dish', alt: 'The best Tom Yum I tasted was in my  home city local bar' },
    {
      img: 'influencer',
      alt: 'I admire Jerma985 unique personality and love watching his livestreams'
    },
    { img: 'book', alt: 'Steve Krug — Don’t make me think is a must-read for all web designers' },
    { img: 'series', alt: 'Severance is my favorite TV series' },
    { img: 'quote', alt: 'My favorite quote is one of my own' },
    {
      img: 'love',
      alt: 'But my most favorite thing in life is love',
      href: 'https://www.instagram.com/devio.10/'
    }
  ]

  let scroll = $state(0)
  let scrollContainer: HTMLDivElement
  onMount(() => (scroll = scrollContainer.scrollLeft))
  let cardInViewport = $derived(scroll / (width + 1))
</script>

<div
  class="
    container-size col-start-1 col-end-3 row-start-13 row-end-14 text-white
    select-none
    px580:row-start-6 px580:row-end-7
    md:col-start-3 md:col-end-5 md:row-start-5 md:row-end-6
    px1180:col-start-9 px1180:col-end-11 px1180:row-start-2 px1180:row-end-3
  "
  bind:clientWidth={width}
  bind:clientHeight={height}
>
  <div
    class="
      group relative h-full w-full overflow-clip rounded-[12.59cqw]
      focus-within:outline-3 focus-within:outline-offset-6
      focus-within:outline-stone-200/40
    "
  >
    <div
      class="
        scrollbar-invisible absolute top-0 left-0 flex h-full w-full snap-x
        snap-mandatory gap-px overflow-auto
      "
      bind:this={scrollContainer}
      onscroll={() => (scroll = scrollContainer.scrollLeft)}
      tabindex="0"
      role="listbox"
      aria-roledescription="My favorite things"
      style={clipPathStyle}
    >
      {#snippet img(src: string, alt: string, href: string | undefined = undefined)}
        <svelte:element
          this={href ? 'a' : 'div'}
          rel={href ? 'noopener noreferrer' : undefined}
          target={href ? '_blank' : undefined}
          class="
            animate-scroll h-full w-full shrink-0 cursor-default snap-center
            overflow-clip rounded-[12.59cqw]
          "
          style={clipPathStyle}
          role="listitem"
          {href}
        >
          <img
            src="/favorite-things/{src}.webp"
            {alt}
            class="h-full w-full shrink-0 rounded-[12.59cqw] object-cover"
            style={clipPathStyle}
          />
        </svelte:element>
      {/snippet}
      {#each images as { img: src, alt, href }, i (i)}
        {@render img(src, alt, href)}
      {/each}
    </div>
    {#if browser}
      <div
        class="
          pointer-events-none absolute bottom-[1.96cqw] z-[1] flex h-[0.78cqw]
          w-full items-center justify-center gap-[0.78cqw] opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      >
        {#each images, i}
          <span
            class="h-[0.78cqw] w-[0.78cqw] rounded-full backdrop-blur-3xl"
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
