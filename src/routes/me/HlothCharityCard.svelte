<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<XsCard
  class="col-start-7 col-end-8 row-start-4 row-end-5 flex cursor-default items-end bg-cover p-2"
  bg
  --bg="url('/hloth-charity.webp')"
  tag="a"
  href="https://x.com/hlothdon"
  rel="noopener noreferrer"
  target="_blank"
>
  <span class="text-xl leading-6 font-semibold select-none one-storey-a">
    hloth
    <br />
    charity
  </span>
</XsCard>
