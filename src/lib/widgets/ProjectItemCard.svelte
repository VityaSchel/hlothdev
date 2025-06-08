<script lang="ts">
  let {
    id,
    name,
    banner
  }: {
    id: string
    name: string
    banner: string
  } = $props()
</script>

<a href="/portfolio/{id}" class="flex flex-col items-center gap-[6px] shrink-0 select-none cursor-default">
  <img src={banner} alt="{name} banner" class="w-auto h-[115px] banner rounded-[5px]">
  <span class="font-sf-pro font-medium text-xs tracking-[-0.1px]">{name}</span>
</a>

<style>
  .banner {
    box-shadow: 0px 0px 0px 0.5px rgb(255, 255, 255, 0.25);
  }
</style>