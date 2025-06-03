<script lang="ts">
  import LgCard from '$lib/widgets/grid-cards/LGCard.svelte'
  import Button from '$lib/ui/Button.svelte'
</script>

<LgCard
  --bg="url(/education.webp)"
  class="col-start-9 col-end-11 row-start-3 row-end-5 flex cursor-default flex-col justify-end gap-[1px] bg-cover text-white"
  tag="a"
  href="https://web.archive.org/web/20170312123940/http://drugoigorod.ru/vitya-indigo/"
  aria-label="Background image: photo of me at 10 years old, sitting in front of my old laptop typing code, screen displays three colorful interface buttons from one of my programs"
>
  <h3
    class="font-condensed mb-[6px] text-[20px] leading-5 font-extrabold tracking-[-0.6px] uppercase"
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
