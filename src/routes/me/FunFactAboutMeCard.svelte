<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<XsCard class="col-start-8 col-end-9 row-start-4 row-end-5 flex flex-col overflow-clip">
  <div
    class="flex h-[31px] px-2 w-full shrink-0 items-center bg-gradient-to-b from-[#FED700] to-[#E6A600]"
  >
    <h4 class="block w-full text-center text-[11px] font-bold tracking-tight text-black">
      Fun fact about me
    </h4>
  </div>
  <div
    class="flex flex-1 flex-col gap-[3px] bg-[#1E1E1E] px-[11px] py-3 text-[10px] font-medium text-white"
  >
    <span class="leading-[11px] tracking-tighter hyphens-auto">
      I started programming when I was six
    </span>
    <p class="leading-[11px] tracking-[-0.065em] text-white/50">
      I was coding in Pascal in 2011, then learned Python, then PHP and finally web in 2020
    </p>
  </div>
</XsCard>
