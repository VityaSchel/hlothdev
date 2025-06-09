<script lang="ts">
  import MdCard from '$lib/widgets/grid-cards/MDCard.svelte'
</script>

<MdCard
  class="
    container-size group relative col-start-2 col-end-4 row-start-4 row-end-5
    bg-cover
    px470:col-start-1 px470:col-end-4 px470:row-start-7 px470:row-end-8
    md:col-start-1 md:col-end-4 md:row-start-4 md:row-end-5
  "
  --bg="url(/me-with-dima-celebrating-one-year-anniversary-2024.webp)"
  aria-label="Background image: photo of me and my boyfriend Dima celebrating our one-year anniversary in 2024, on this photo we are hugging and smiling, a part of the 6-color LGBT flag is visible in the background"
>
  <div
    class="
      flex h-full w-full flex-col-reverse justify-between rounded-[8.22cqw]
      p-[4.11cqw] text-[3.08cqw] tracking-[-0.15cqw]
    "
  >
    <h3
      class="
        relative z-[1] leading-[3.08cqw] opacity-100 transition-opacity
        duration-300
        group-hover:opacity-50
      "
    >
      I’m openly gay and fight for LGBTQIA+ rights and representation
    </h3>
    <span
      class="
        relative z-[1] opacity-0 transition-opacity duration-300
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
        group-hover:opacity-100
      "
    ></div>
  </div>
</MdCard>
