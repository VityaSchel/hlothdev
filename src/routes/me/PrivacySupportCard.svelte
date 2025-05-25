<script lang="ts">
  import '@fontsource-variable/sofia-sans-extra-condensed'
  import LgCard from '$lib/widgets/grid-cards/LGCard.svelte'
  import Button from '$lib/ui/Button.svelte'
</script>

<LgCard class="flex flex-col justify-end gap-[6px]">
  <h2 class="font-condensed text-[20px] leading-5 font-extrabold tracking-[-0.6px] uppercase">
    Privacy Rights
  </h2>
  <p class="pb-[9px] text-[11px] leading-[13px] font-semibold tracking-[-0.5px]">
    I advocate for privacy and prefer selfhosting over SAAS. All my personal websites are available
    in lokinet under hloth.loki domain.
  </p>
  <Button variant="md" class="small-caps">Learn about my commitment</Button>
</LgCard>