<script lang="ts">
  import MdCard from '$lib/widgets/grid-cards/MDCard.svelte'
</script>

<MdCard
  class="
    container-size col-start-2 col-end-4 row-start-4 row-end-5
    px580:col-start-1 px580:col-end-4 px580:row-start-7 px580:row-end-8
    md:col-start-1 md:col-end-4 md:row-start-4 md:row-end-5
  "
  aria-label="Background image: photo of me and my boyfriend Dima celebrating our one-year anniversary in 2024, on this photo we are hugging and smiling, a part of the 6-color LGBT flag is visible in the background"
>
  <div
    class="
      bg group relative flex h-full w-full flex-col-reverse justify-between
      overflow-clip rounded-[8.22cqw] bg-cover p-[4.11cqw] text-[4.72cqw]
      tracking-[-0.18cqw] focus-lg
      px580:text-[3.08cqw]
      @px273:tracking-[-0.15cqw]
    "
    tabindex="0"
    role="button"
  >
    <h3
      class="
        relative z-[1] leading-[5.5cqw] opacity-100 transition-opacity
        duration-300
        group-focus-within:opacity-50
        group-hover:opacity-50
        px580:leading-[3.08cqw]
      "
    >
      I’m openly gay and fight
      <br
        class="
          inline
          px580:hidden
        "
      />
      for LGBTQIA+ rights
      <br
        class="
          inline
          px580:hidden
        "
      />
      and representation
    </h3>
    <span
      class="
        relative z-[1] opacity-0 transition-opacity duration-300
        group-focus-within:opacity-100
        group-hover:opacity-100
      "
    >
      I prioritize applying to organizations that have established diversity standards and invest in
      equality training.
    </span>
    <div
      class="
        absolute top-0 left-0 h-full w-full bg-black/50 opacity-0
        transition-opacity duration-300
        group-focus-within:opacity-100
        group-hover:opacity-100
      "
    ></div>
    <span
      class="
        small-caps pointer-events-none absolute top-[3cqw] right-[6.15cqw] z-[1]
        hidden w-[60cqw] text-right text-[6cqw] leading-[6cqw] font-bold
        text-stone-200/80 uppercase opacity-100 transition-opacity duration-300
        select-none text-shadow-md
        group-focus-within:opacity-0
        group-hover:opacity-0
        px580:w-[30cqw] px580:text-[3.07cqw] px580:leading-[3.5cqw]
        no-hover:block
      "
      aria-hidden="true"
    >
      Tap to reveal more information
    </span>
  </div>
</MdCard>

<style>
  .bg {
    background-image:
      url(/me-with-dima-celebrating-one-year-anniversary-2024.webp),
      linear-gradient(to bottom, #525252, #525252);
  }
</style>
