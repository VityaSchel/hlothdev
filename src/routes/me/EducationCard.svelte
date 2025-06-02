<script lang="ts">
  import LgCard from '$lib/widgets/grid-cards/LGCard.svelte'
  import Button from '$lib/ui/Button.svelte'
</script>

<LgCard --bg="url(/education.webp)" class="flex flex-col justify-end gap-[1px] bg-cover text-white">
  <h2 class="font-condensed text-[20px] leading-5 font-extrabold tracking-[-0.6px] uppercase mb-[6px]">
    Education
  </h2>
  <p class="pb-[9px] text-[11px] leading-[13px] font-bold tracking-[-0.6px]">
    I’m self-taught talent who skipped univer-sity degree. I only have high school diploma.
  </p>
  <Button variant="md" class="small-caps text-black">Read an article about 10 y.o. me</Button>
</LgCard>
