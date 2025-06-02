<script lang="ts">
  import { getSvgPath } from 'figma-squircle'

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
  $effect(() => console.log(clipPathStyle))
</script>

<div
  class="scrollbar-invisible col-span-2 row-span-1 flex snap-x snap-mandatory gap-px overflow-auto rounded-4xl text-white"
  bind:clientWidth={width}
  bind:clientHeight={height}
  style={clipPathStyle}
>
  {#snippet img(src: string, alt: string)}
    <div class="animate-scroll aspect-[508/247] h-full w-auto shrink-0 snap-center overflow-clip">
      <img
        src="/favorite-things/{src}.webp"
        {alt}
        class="h-full w-full shrink-0 rounded-4xl object-cover"
        style={clipPathStyle}
      />
    </div>
  {/snippet}
  {@render img('favorite-things', 'Scroll to see my favorite things ➜')}
  {@render img('games', 'I love puzzle platformers, survival horrors and adventure sandboxes')}
  {@render img('cinema', 'I love criminals, dramas and detectives')}
  {@render img('music', 'Pop is always in my playlist')}
  {@render img('dish', 'The best Tom Yum I tasted was in my  home city local bar')}
  {@render img(
    'influencer',
    'I admire Jerma985 unique personality and love watching his livestreams'
  )}
  {@render img('book', 'Steve Krug — Don’t make me think is a must-read for all web designers')}
  {@render img('series', 'Severance is my favorite TV series')}
  {@render img('quote', 'My favorite quote is one of my own')}
  {@render img('love', 'But my most favorite thing in life is love')}
</div>

<style lang="scss">
  .scrollbar-invisible {
    scrollbar-width: none;
  }
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
      transform: scale(0);
    }

    50% {
      transform: scale(1);
    }

    100% {
      transform: scale(0);
    }
  }
</style>
