<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<XsCard
  class="
    container-size group relative col-start-3 col-end-4 row-start-10 row-end-11
    bg-cover
    px470:col-start-2 px470:col-end-3 px470:row-start-4 px470:row-end-5
    md:col-start-2 md:col-end-3 md:row-start-5 md:row-end-6
    px1180:col-start-10 px1180:col-end-11 px1180:row-start-1 px1180:row-end-2
  "
  bg
  --bg="url('/ready-to-relocate.webp')"
  aria-label="Background image: photo of me from my back standing in front of a chinese temple titled 三洞講法堂 (rougly translates to Hall of Preaching the Teachings of the Three Caverns), part of City God Temple of Shanghai, located in the city of Shanghai, China"
>
  <div
    class="
      flex h-full w-full flex-col-reverse justify-between px-[5.88cqw]
      py-[5.04cqw]
    "
  >
    <h4
      class="
        text-[9.3cqw] font-semibold tracking-[-0.075em]
        @px103:text-[10.08cqw]
      "
    >
      I’m ready to relocate
    </h4>

    <div
      class="
        absolute top-0 left-0 h-full w-full overflow-auto bg-black/70 opacity-0
        transition-opacity duration-300
        group-hover:opacity-100
      "
    >
      <p
        class="
          relative z-[1] flex w-full flex-col gap-1 p-2 text-[7.5cqw]
          leading-[10cqw] font-medium tracking-[-0.8cqw] opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
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
    </div>
  </div>
</XsCard>
