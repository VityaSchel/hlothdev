<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<div
  class="
    container-size group relative col-start-3 col-end-4 row-start-10 row-end-11
    rounded-[11.76%] perspective-near
    px580:col-start-2 px580:col-end-3 px580:row-start-4 px580:row-end-5
    md:col-start-2 md:col-end-3 md:row-start-5 md:row-end-6
    px1180:col-start-10 px1180:col-end-11 px1180:row-start-1 px1180:row-end-2
  "
  tabindex="0"
  role="button"
>
  <XsCard
    class="
      relative flex h-full w-full rotate-y-0 flex-col-reverse justify-between
      bg-[url('/ready-to-relocate.webp')] bg-cover px-[5.88cqw] py-[5.04cqw]
      transition-transform duration-300 ease-out backface-hidden
      motion-safe:group-focus-within:rotate-y-180
      motion-safe:group-hover:rotate-y-180
    "
    aria-label="Background image: photo of me from my back standing in front of a chinese temple titled 三洞講法堂 (rougly translates to Hall of Preaching the Teachings of the Three Caverns), part of City God Temple of Shanghai, located in the city of Shanghai, China"
  >
    <h4
      class="
        text-[9.3cqw] font-semibold tracking-[-0.075em]
        @px105:text-[10.08cqw]
      "
    >
      I’m ready to relocate
    </h4>
    <span
      class="
        small-caps text-shadow-reveal pointer-events-none absolute top-[7cqw]
        right-[10cqw] z-[1] hidden w-[65cqw] text-right text-[12cqw]
        leading-[12cqw] font-bold tracking-[-0.5cqw] text-stone-200 uppercase
        opacity-100 transition-opacity duration-300 select-none
        group-focus-within:opacity-0
        group-hover:opacity-0
        no-hover:inline
      "
      aria-hidden="true"
    >
      Tap to reveal
    </span>
  </XsCard>
  <XsCard
    class="
      absolute top-0 left-0 h-full w-full overflow-auto bg-black/70
      transition-transform duration-300 ease-out backface-hidden
      motion-safe:-rotate-y-180 motion-safe:group-focus-within:rotate-y-0
      motion-safe:group-hover:rotate-y-0
      motion-reduce:opacity-0 motion-reduce:transition-opacity
      motion-reduce:group-focus-within:opacity-100
      motion-reduce:group-hover:opacity-100
    "
  >
    <p
      class="
        relative z-[1] flex w-full flex-col gap-1 p-2 text-[7.5cqw]
        leading-[10cqw] font-medium tracking-[-0.8cqw]
        @px80:text-[8cqw] @px80:leading-[10.5cqw]
        @px90:text-[9cqw] @px90:leading-[11cqw] @px90:tracking-[-0.7cqw]
        @px103:tracking-[-0.06em]
        @px114:leading-[11.76cqw] @px114:tracking-[-0.051em]
      "
    >
      <span>
        <span class="mr-[1.68cqw] font-semibold text-[#28c841]">best:</span>
        North America, Western Europe
      </span>
      <span>
        <span class="mr-[1.68cqw] font-semibold text-[#fdbc2c]">ok:</span>
        <a
          href="https://en.wikipedia.org/wiki/Australasia"
          target="_blank"
          rel="nofollow noreferrer noopener"
          class="underline"
        >
          Australasia,
        </a>
        Japan, South Korea
      </span>
      <span>
        <span class="mr-[1.68cqw] font-semibold text-[#EF8980]">no-go:</span>
        <a
          href="https://en.wikipedia.org/wiki/Global_North_and_Global_South#/media/File:World_map._UNCTAD_classification_of_economies.png"
          target="_blank"
          rel="nofollow noreferrer noopener"
          class="underline"
        >
          Global South,
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Central_and_Eastern_Europe#Definitions"
          target="_blank"
          rel="noreferrer noopener nofollow"
          class="underline"
        >
          Central & Eastern Europe,
        </a>
        India
      </span>
    </p>
  </XsCard>
</div>
