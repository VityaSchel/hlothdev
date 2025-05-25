<script lang="ts">
  import SmCard from '$lib/widgets/grid-cards/SMCard.svelte'
</script>

<SmCard
  --bg="url(/support-ukraine.webp)"
  class="flex flex-col justify-between bg-cover p-4 group"
>
  <span class="text-[9px] font-normal tracking-[-0.3px] group-hover:opacity-100 has-focus-within:opacity-100 opacity-0 transition-opacity duration-300">
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
