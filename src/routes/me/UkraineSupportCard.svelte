<script lang="ts">
  import SmCard from '$lib/widgets/grid-cards/SMCard.svelte'
</script>

<SmCard
  class="
    container-size group col-start-2 col-end-4 row-start-8 row-end-9 bg-cover
    px470:col-start-4 px470:col-end-6 px470:row-start-1 px470:row-end-2
  "
  --bg="url(/support-ukraine.webp)"
  aria-label="Background image: photo of a couple wearing traditional Ukrainian embroidered clothing, holding hands in a field"
>
  <div class="flex h-full w-full flex-col justify-between p-[6.29cqw]">
    <span
      class="
        text-[3.54cqw] font-normal tracking-[-0.118cqw] opacity-0
        transition-opacity duration-300
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
    <h3
      class="
        text-[4.72cqw] leading-[4.72cqw] font-semibold tracking-[-0.2cqw]
        @px175:tracking-[-0.1cqw]
        @px188:tracking-[-0.08cqw]
      "
    >
      I’m on Ukraine side in war with Russia
    </h3>
  </div>
</SmCard>
