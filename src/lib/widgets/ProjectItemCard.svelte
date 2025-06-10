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

<a
  href="/portfolio/{id}"
  class="
    project-view-transition flex shrink-0 cursor-default flex-col items-center
    gap-[6px] select-none
    focus:outline-0
    focus-visible:bg-stone-600/50 focus-visible:outline-[8px]
    focus-visible:outline-stone-600/50
  "
  draggable="false"
  style:view-transition-name="project-{id}"
>
  <img class="banner rounded-[5px]" src={banner} alt="{name} banner" draggable="false" />
  <span class="font-sf-pro text-xs font-medium tracking-[-0.1px]">{name}</span>
</a>

<style>
  .banner {
    box-shadow: 0px 0px 0px 0.5px rgb(255, 255, 255, 0.25);
  }
</style>
