<script lang="ts">
  import '@fontsource-variable/sofia-sans-extra-condensed'
  import LgCard from '$lib/widgets/grid-cards/LGCard.svelte'
  import Button from '$lib/ui/Button.svelte'
</script>

<LgCard
  class="group col-start-7 col-end-9 row-start-1 row-end-3 flex flex-col justify-end gap-[6px] bg-cover bg-position-[30%]"
  --bg="url(/privacy-rights.webp)"
  aria-label="Background image: photo of a surveillance camera mounted on a wall"
>
  <span
    class="mb-auto text-[9px] tracking-[-0.03px] text-[#5D5D5D] opacity-0 transition-opacity duration-300 group-hover:opacity-100 has-focus-within:opacity-100"
  >
    Photo by <a
      href="https://unsplash.com/@srhhrbch"
      class="font-medium"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      Siarhei Horbach
    </a>
  </span>
  <h3 class="font-condensed text-[20px] leading-5 font-extrabold tracking-[-0.6px] uppercase">
    Privacy Rights
  </h3>
  <p class="pb-[9px] text-[11px] leading-[13px] font-semibold tracking-[-0.5px]">
    I advocate for privacy and prefer selfhosting over SAAS. All my personal websites are available
    in lokinet under hloth.loki domain.
  </p>
  <Button variant="md" class="small-caps select-none">Learn about my commitment</Button>
</LgCard>
