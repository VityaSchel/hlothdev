<script>
  import Squircle from '$lib/Squircle.svelte'
</script>

<a
  href="http://hlothadmob6vsssnjd7ovwyz4z2le4pbpbyfhqbuwooyq62ona3l4bid.onion/"
  class="
    drop-background-shadow relative max-w-full flex-1 rounded-[16px] focus-lg
    px680:flex-2/5
    md:flex-1
    lg:flex-[171]
  "
  aria-label="Open onion mirror of this website"
>
  <Squircle class="bg-black/10" cornerRadius={16}>
    <div
      class="
        flex h-full items-center gap-3 p-3 select-none
        px470:gap-4 px470:p-4
        md:justify-center md:gap-3 md:py-2
        px870:gap-4
        lg:flex-col lg:gap-2
      "
    >
      <svg
        class="
          aspect-square h-8 w-8 shrink-0
          px470:h-12 px470:w-12
          md:h-10 md:w-10
          xl:h-12 xl:w-12
        "
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="26" cy="26.5" r="26" fill="#3B82F7" />
        <path
          d="M40.025 26.5c0-7.746-6.28-14.025-14.025-14.025-7.746 0-14.025 6.279-14.025 14.025S18.254 40.525 26 40.525s14.025-6.28 14.025-14.025m2.475 0C42.5 35.613 35.113 43 26 43S9.5 35.613 9.5 26.5 16.887 10 26 10s16.5 7.387 16.5 16.5"
          fill="#E2ECFE"
        />
        <path
          d="M35.075 26.5A9.075 9.075 0 0 0 26 17.425a1.237 1.237 0 1 1 0-2.475A11.55 11.55 0 0 1 37.55 26.5v.072A11.55 11.55 0 0 1 26 38.05a1.237 1.237 0 1 1 0-2.475 9.075 9.075 0 0 0 9.074-8.962z"
          fill="#E2ECFE"
        />
        <path
          d="M26.061 19.9a6.6 6.6 0 0 1 6.013 4.018l.024.056.03.076a6.6 6.6 0 0 1-1.462 7.116v.001a6.6 6.6 0 0 1-4.584 1.932L26 33.1a1.237 1.237 0 1 1 0-2.475h.051a4.13 4.13 0 0 0 2.866-1.208l.035-.036a4.13 4.13 0 0 0 .86-4.46 4.13 4.13 0 0 0-3.736-2.545L26 22.375h-.032A1.238 1.238 0 0 1 26 19.9z"
          fill="#E2ECFE"
        />
      </svg>
      <span
        class="
          text-base leading-5 font-bold text-thick-typography
          px530:text-xl
          px680:text-base
          px870:text-xl px870:leading-6
          lg:text-base lg:leading-[19px] lg:font-medium
        "
      >
        Onion mirror
      </span>
    </div>
  </Squircle>
</a>

<style>
  .drop-background-shadow {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.25);
  }
</style>
