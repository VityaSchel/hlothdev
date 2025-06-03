<script lang="ts">
  import SmCard from '$lib/widgets/grid-cards/SMCard.svelte'
</script>

<SmCard
  class="group col-start-4 col-end-6 row-start-1 row-end-2 flex flex-col justify-between bg-cover p-4"
  --bg="url(/support-ukraine.webp)"
>
  <span
    class="text-[9px] font-normal tracking-[-0.3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 has-focus-within:opacity-100"
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
