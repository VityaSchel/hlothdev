<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<XsCard
  class="
    col-start-7 col-end-8 row-start-3 row-end-4 flex cursor-default items-end
    bg-cover p-2
    px1178:col-start-7 px1178:col-end-8 px1178:row-start-4 px1178:row-end-5
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
