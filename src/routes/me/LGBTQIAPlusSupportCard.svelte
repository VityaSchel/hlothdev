<script lang="ts">
  import MdCard from '$lib/widgets/grid-cards/MDCard.svelte'
</script>

<MdCard
  class="group relative col-start-1 col-end-4 row-start-4 row-end-5 flex flex-col-reverse justify-between bg-cover"
  --bg="url(/me-with-dima-celebrating-one-year-anniversary-2024.webp)"
  aria-label="Background image: photo of me and my boyfriend Dima celebrating our one-year anniversary in 2024, on this photo we are hugging and smiling, a part of the 6-color LGBT flag is visible in the background"
>
  <h3 class="relative z-[1] leading-3 transition-opacity opacity-100 duration-300 group-hover:opacity-50">
    I’m openly gay and fight for LGBTQIA+ rights and representation
  </h3>
  <span class="relative z-[1] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    I prioritize applying to organizations that have established diversity standards and invest in
    equality training.
  </span>
  <div
    class="absolute top-0 left-0 h-full w-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  ></div>
</MdCard>
