<script lang="ts">
  let {
    name,
    banner
  }: {
    name: string
    banner: string
  } = $props()
</script>

<button class="flex flex-col items-center gap-[6px] shrink-0 select-none">
  <img src={banner} alt="{name} banner" class="w-auto h-[115px] banner rounded-[5px]">
  <span class="font-sf-pro-display font-medium text-xs">{name}</span>
</button>

<style>
  .banner {
    box-shadow: 0px 0px 0px 0.5px rgb(255, 255, 255, 0.25);
  }
</style>