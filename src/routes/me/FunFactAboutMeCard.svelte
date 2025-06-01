<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<XsCard class="flex flex-col">
  <div class="from-[#FED700] to-[#E6A600] bg-gradient-to-b h-[31px] shrink-0 w-full flex items-center">
    <span class="text-center font-bold text-[11px] text-black w-full block tracking-tight">Fun fact about me</span>
  </div>
  <div class="flex flex-1 bg-[#1E1E1E] text-white gap-[3px] flex-col px-[11px] py-3 text-[10px] font-medium">
    <span class="tracking-tighter hyphens-auto leading-[11px]">I started programming when I was six</span>
    <p class="tracking-[-0.06em] leading-[11px] text-white/50">I was coding in Pascal in 2011, then learned Python, then PHP and finally web in 2020</p>
  </div>
</XsCard>
