<script lang="ts">
  import LgCard from '$lib/widgets/grid-cards/LGCard.svelte'
  import Button from '$lib/ui/Button.svelte'
</script>

<LgCard
  --bg="url(/education.webp)"
  class="
    container-size col-start-2 col-end-4 row-start-11 row-end-13 cursor-default
    bg-cover text-white
    px470:col-start-4 px470:col-end-6 px470:row-start-7 px470:row-end-9
    md:col-start-7 md:col-end-9 md:row-start-4 md:row-end-6
    px1180:col-start-9 px1180:col-end-11 px1180:row-start-3 px1180:row-end-5
  "
  tag="a"
  href="https://web.archive.org/web/20170312123940/http://drugoigorod.ru/vitya-indigo/"
  aria-label="Background image: photo of me at 10 years old, sitting in front of my old laptop typing code, screen displays three colorful interface buttons from one of my programs"
  rel="nofollow noopener noreferrer"
  target="_blank"
>
  <div
    class="
      flex h-full w-full flex-col justify-end gap-[0.39cqw] px-[5.90cqw]
      py-[5.11cqw]
    "
  >
    <h3
      class="
        mb-[2.36cqw] font-extra-condensed text-[7.87cqw] leading-[7.87cqw]
        font-extrabold tracking-[-0.23cqw] uppercase
      "
    >
      Education
    </h3>
    <p
      class="
        pb-[3.54cqw] text-[4.33cqw] leading-[5.11cqw] font-bold
        tracking-[-0.4cqw]
        @px165:tracking-[-0.3cqw]
        @px198:tracking-[-0.27cqw]
        @px239:tracking-[-0.23cqw]
      "
    >
      I’m self-taught talent who skipped univer-
      <wbr />
      sity degree. I only have high school diploma.
    </p>
    <Button variant="md" class="h-[10.68cqh]" tabindex={-1}>
      Read an article about 10 y.o. me
    </Button>
  </div>
</LgCard>
