<script lang="ts">
  import GithubIcon from '$lib/icons/GithubIcon.svelte'
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<XsCard
  class="
    col-start-6 col-end-7 row-start-5 row-end-6 flex cursor-default flex-col
    items-start justify-between bg-gradient-to-b from-[#191919] to-[#0d0d0d] p-2
    px1180:col-start-8 px1180:col-end-9 px1180:row-start-3 px1180:row-end-4
  "
  tag="a"
  href="https://github.com/VityaSchel"
  rel="noopener noreferrer"
  target="_blank"
>
  <span class="flex h-11 w-11">
    <GithubIcon />
  </span>
  <div class="flex flex-col gap-0 select-none">
    <span class="text-3xl font-medium tracking-tight text-white/80">185</span>
    <span class="pl-1 text-xs font-semibold text-white/90">repositories</span>
  </div>
</XsCard>
