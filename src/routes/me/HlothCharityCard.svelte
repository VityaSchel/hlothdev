<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<XsCard
  class="
    col-start-1 col-end-2 row-start-12 row-end-13 flex cursor-default items-end
    bg-cover p-2
    px470:row-start-8 px470:row-end-9
    md:col-start-7 md:col-end-8 md:row-start-3 md:row-end-4
    px1180:col-start-7 px1180:col-end-8 px1180:row-start-4 px1180:row-end-5
  "
  bg
  --bg="url('/hloth-charity.webp')"
  tag="a"
  href="https://x.com/hlothdon"
  rel="noopener noreferrer"
  target="_blank"
>
  <span class="one-storey-a text-xl leading-6 font-semibold select-none">
    hloth
    <br />
    charity
  </span>
</XsCard>
