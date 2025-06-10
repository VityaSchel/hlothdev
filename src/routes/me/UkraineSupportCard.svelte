<script lang="ts">
  import SmCard from '$lib/widgets/grid-cards/SMCard.svelte'
</script>

<SmCard
  class="
    container-size col-start-2 col-end-4 row-start-8 row-end-9
    px580:col-start-4 px580:col-end-6 px580:row-start-1 px580:row-end-2
  "
  aria-label="Background image: photo of a couple wearing traditional Ukrainian embroidered clothing, holding hands in a field"
>
  <div
    class="
      group bg flex h-full w-full flex-col justify-between overflow-clip
      rounded-[12.5984252cqw] bg-cover p-[6.29cqw]
    "
  >
    <span
      class="
        text-[3.54cqw] font-normal tracking-[-0.118cqw] opacity-0
        transition-opacity duration-300
        group-hover:opacity-100
        has-focus-within:opacity-100
        no-hover:opacity-100
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
        text-[5cqw] leading-[5.25cqw] font-semibold tracking-[-0.2cqw]
        @px175:tracking-[-0.12cqw]
        @px188:tracking-[-0.2cqw]
      "
    >
      I’m on the Ukrainian side in the war with Russia.
    </h3>
  </div>
</SmCard>

<style>
  .bg {
    background-image: url('/support-ukraine.webp'), linear-gradient(to bottom, #525252, #525252);
  }
</style>
