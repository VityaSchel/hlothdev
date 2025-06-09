<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<XsCard
  class="
    container-size col-start-3 col-end-4 row-start-13 row-end-14 flex flex-col
    overflow-clip
    px470:col-start-2 px470:col-end-3 px470:row-start-8 px470:row-end-9
    md:col-start-8 md:col-end-9 md:row-start-3 md:row-end-4
    px1180:col-start-8 px1180:col-end-9 px1180:row-start-4 px1180:row-end-5
  "
>
  <div
    class="
      flex h-[26.05cqw] w-full shrink-0 items-center bg-gradient-to-b
      from-[#FED700] to-[#E6A600] px-[6.72cqw]
    "
  >
    <h4
      class="
        block w-full text-center text-[9.24cqw] font-bold tracking-tight
        text-black
      "
    >
      Fun fact about me
    </h4>
  </div>
  <div
    class="
      flex flex-1 flex-col gap-[2.52cqw] bg-[#1E1E1E] px-[9.24cqw] py-[10.08cqw]
      text-[8.40cqw] font-medium text-white
    "
  >
    <span class="leading-[9.24cqw] tracking-tighter hyphens-auto">
      I started programming when I was six
    </span>
    <p
      class="
        leading-[9.24cqw] tracking-[-0.08em] text-white/50
        @px84:tracking-[-0.07em]
        @px95:tracking-[-0.065em]
      "
    >
      I was coding in Pascal in 2011, then learned Python, then PHP and finally web in 2020
    </p>
  </div>
</XsCard>
