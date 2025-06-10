<script lang="ts">
  import LgCard from '$lib/widgets/grid-cards/LGCard.svelte'
  import Button from '$lib/ui/Button.svelte'
</script>

<a
  href="https://web.archive.org/web/20170312123940/http://drugoigorod.ru/vitya-indigo/"
  rel="nofollow noopener noreferrer"
  target="_blank"
  class="
    container-size col-start-2 col-end-4 row-start-11 row-end-13 cursor-default
    rounded-[5.11%] focus-lg
    px580:col-start-4 px580:col-end-6 px580:row-start-7 px580:row-end-9
    md:col-start-7 md:col-end-9 md:row-start-4 md:row-end-6
    px1180:col-start-9 px1180:col-end-11 px1180:row-start-3 px1180:row-end-5
  "
>
  <LgCard
    --bg="url(/education.webp), linear-gradient(to bottom, var(--color-neutral-600), var(--color-neutral-600))"
    class="h-full w-full bg-cover text-white"
    aria-label="Background image: photo of me at 10 years old, sitting in front of my old laptop typing code, screen displays three colorful interface buttons from one of my programs"
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
</a>
