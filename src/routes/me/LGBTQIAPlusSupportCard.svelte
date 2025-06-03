<script lang="ts">
  import MdCard from '$lib/widgets/grid-cards/MDCard.svelte'
</script>

<MdCard
  class="relative col-start-1 col-end-4 row-start-4 row-end-5 flex flex-col justify-between bg-cover duration-300 group"
  --bg="url(/me-with-dima-celebrating-one-year-anniversary-2024.webp)"
>
  <span class="opacity-0 transition-opacity duration-300 group-hover:opacity-100 relative z-[1]">
    I prioritize applying to organizations that have established diversity standards and invest in
    equality training.
  </span>
  <h3 class="leading-3 relative z-[1] group-hover:opacity-50 duration-300">I’m openly gay and fight for LGBTQIA+ rights and representation</h3>
  <div
    class="absolute top-0 left-0 h-full w-full bg-black/50 opacity-0 duration-300 group-hover:opacity-100"
  ></div>
</MdCard>
