<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
  import Clock from '$lib/widgets/Clock.svelte'
</script>

<XsCard
  class="col-start-7 col-end-8 row-start-3 row-end-4 flex items-center justify-center bg-[#211b877a]"
>
  <div class="flex aspect-square h-full w-auto max-w-full items-center justify-center">
    <div class="flex aspect-square h-auto max-h-full w-full items-center justify-center">
      <Clock />
    </div>
  </div>
</XsCard>
