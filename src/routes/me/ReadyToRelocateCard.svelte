<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<XsCard
  class="group relative col-start-10 col-end-11 row-start-1 row-end-2 flex flex-col-reverse justify-between bg-cover px-[7px] py-[6px]"
  bg
  --bg="url('/ready-to-relocate.webp')"
  aria-label="Background image: photo of me from my back standing in front of a chinese temple titled 三洞講法堂 (rougly translates to Hall of Preaching the Teachings of the Three Caverns), part of City God Temple of Shanghai, located in the city of Shanghai, China"
>
  <h4 class="text-xs font-semibold tracking-[-0.075em]">I’m ready to relocate</h4>

  <div
    class="absolute top-0 left-0 h-full w-full bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  >
    <p
      class="relative z-[1] flex w-full flex-col gap-1 p-2 text-[11px] leading-[14px] font-medium tracking-tighter opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <span>
        <span class="mr-0.5 font-semibold text-[#28c841]">best:</span>
        North America, Western Europe
      </span>
      <span>
        <span class="mr-0.5 font-semibold text-[#fdbc2c]">ok:</span>
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
        <span class="mr-0.5 font-semibold text-[#EF8980]">no-go:</span>
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
  </div>
</XsCard>
