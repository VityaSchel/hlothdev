<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<XsCard
  class="flex items-end bg-cover p-2 cursor-default"
  bg
  --bg="url('/hloth-charity.webp')"
  tag="a"
  href="https://x.com/hlothdon"
  rel="noopener noreferrer"
  target="_blank"
>
  <span class="text-xl leading-6 font-semibold select-none">
    hloth
    <br />
    charity
  </span>
</XsCard>
