<script lang="ts">
  import LgCard from '$lib/widgets/grid-cards/LGCard.svelte'
  import Button from '$lib/ui/Button.svelte'
</script>

<LgCard
  --bg="url(/education.webp)"
  class="
    col-start-2 col-end-4 row-start-11 row-end-13 flex cursor-default flex-col
    justify-end gap-[1px] bg-cover px-[15px] py-[13px] text-white
    px463:col-start-4 px463:col-end-6 px463:row-start-7 px463:row-end-9
    md:col-start-7 md:col-end-9 md:row-start-4 md:row-end-6
    px1180:col-start-9 px1180:col-end-11 px1180:row-start-3 px1180:row-end-5
  "
  tag="a"
  href="https://web.archive.org/web/20170312123940/http://drugoigorod.ru/vitya-indigo/"
  aria-label="Background image: photo of me at 10 years old, sitting in front of my old laptop typing code, screen displays three colorful interface buttons from one of my programs"
>
  <h3
    class="
      mb-[6px] font-extra-condensed text-[20px] leading-5 font-extrabold
      tracking-[-0.6px] uppercase
    "
  >
    Education
  </h3>
  <p class="pb-[9px] text-[11px] leading-[13px] font-bold tracking-[-0.6px]">
    I’m self-taught talent who skipped univer-sity degree. I only have high school diploma.
  </p>
  <Button variant="md" class="small-caps cursor-default text-black select-none" tabindex={-1}>
    Read an article about 10 y.o. me
  </Button>
</LgCard>
