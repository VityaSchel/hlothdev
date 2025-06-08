<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
  import Clock from '$lib/widgets/Clock.svelte'
</script>

<XsCard
  class="
    col-start-5 col-end-6 row-start-5 row-end-6 flex items-center justify-center
    bg-[#211b877a]
    px1180:col-start-7 px1180:col-end-8 px1180:row-start-3 px1180:row-end-4
  "
>
  <div
    class="
      flex aspect-square h-full w-auto max-w-full items-center justify-center
    "
  >
    <div
      class="
        flex aspect-square h-auto max-h-full w-full items-center justify-center
      "
    >
      <Clock />
    </div>
  </div>
</XsCard>
