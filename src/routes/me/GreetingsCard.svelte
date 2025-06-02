<script lang="ts">
  import XlCard from '$lib/widgets/grid-cards/XLCard.svelte'
  import WavingHandIcon from '$lib/icons/WavingHandIcon.svelte'
  import Button from '$lib/ui/Button.svelte'
</script>

<XlCard
  class="flex flex-col justify-between text-black"
  bg="radial-gradient(63.89% 64.44% at 89% 63%,rgb(204, 123, 241),rgb(208, 138, 240) 12.019%,rgb(228, 208, 233) 34.615%,rgb(225, 212, 231) 51.923%,rgb(226, 206, 236) 59.135%,rgb(226, 206, 236) 77.885%,rgb(232, 232, 232) 100%);"
>
  <span class="h-[43px] w-[43px] shrink-0 rounded-full bg-black p-2">
    <span class="animate-rotate flex">
      <WavingHandIcon />
    </span>
  </span>
  <h1 class="one-storey-a text-[39px] leading-[39px] font-bold tracking-[0.35px]">
    Hi, I’m Viktor, and my life is a roller coaster!
  </h1>
  <Button class="flex items-center gap-6">
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
  .animate-rotate {
    animation: rotate 1s cubic-bezier(0.61, 1, 0.88, 1);
    transform-origin: 73% 80%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(-15deg);
    }
    40% {
      transform: rotate(15deg);
    }
    60% {
      transform: rotate(-15deg);
    }
    80% {
      transform: rotate(15deg);
    }
    95% {
      transform: rotate(0deg);
    }
  }

  /* @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  } */
</style>
