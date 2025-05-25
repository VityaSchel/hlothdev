<script lang="ts">
  import XlCard from '$lib/widgets/grid-cards/XLCard.svelte'
  import WavingHandIcon from '$lib/icons/WavingHandIcon.svelte'
  import Button from '$lib/ui/Button.svelte'
</script>

<XlCard
  --bg="radial-gradient(
      63.89% 64.44% at 89% 63%,
      rgb(204, 123, 241),
      rgb(208, 138, 240) 12.019%,
      rgb(228, 208, 233) 34.615%,
      rgb(225, 212, 231) 51.923%,
      rgb(226, 206, 236) 59.135%,
      rgb(226, 206, 236) 77.885%,
      rgb(232, 232, 232) 100%
    );"
  class="flex flex-col justify-between text-black"
>
  <span class="h-[43px] w-[43px] shrink-0 rounded-full bg-black p-2">
    <WavingHandIcon />
  </span>
  <h1 class="ss07 text-[39px] leading-[39px] font-bold tracking-[0.2px]">
    Hi, I’m Viktor, and my life is a roller coaster!
  </h1>
  <Button class="flex items-center gap-[18px]">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.16663 11.5H20.8333M20.8333 11.5L11.5 2.16666M20.8333 11.5L11.5 20.8333"
        stroke="black"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    Read more
  </Button>
</XlCard>

<style>
  .ss07 {
    font-feature-settings: 'ss07' on;
  }
</style>
