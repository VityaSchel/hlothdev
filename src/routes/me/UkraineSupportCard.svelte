<script lang="ts">
  import SmCard from '$lib/widgets/grid-cards/SMCard.svelte'
</script>

<SmCard
  class="
    group col-start-2 col-end-4 row-start-8 row-end-9 flex flex-col
    justify-between bg-cover p-4
    px463:col-start-4 px463:col-end-6 px463:row-start-1 px463:row-end-2
  "
  --bg="url(/support-ukraine.webp)"
  aria-label="Background image: photo of a couple wearing traditional Ukrainian embroidered clothing, holding hands in a field"
>
  <span
    class="
      text-[9px] font-normal tracking-[-0.3px] opacity-0 transition-opacity
      duration-300
      group-hover:opacity-100
      has-focus-within:opacity-100
    "
  >
    Photo by <a
      href="https://unsplash.com/@kate_gliz"
      class="font-medium"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      Kateryna Hliznitsova
    </a>
  </span>
  <h3 class="text-xs font-semibold tracking-[-0.2px]">I’m on Ukraine side in war with Russia</h3>
</SmCard>
