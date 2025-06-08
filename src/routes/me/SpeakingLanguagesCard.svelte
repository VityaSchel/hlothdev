<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<XsCard
  class="
    col-start-1 col-end-2 row-start-5 row-end-6 flex flex-col gap-[4px]
    bg-[#2E2E2E] px-[11px] py-2 text-white
    px773:col-start-6 px773:col-end-7 px773:row-start-1 px773:row-end-2
  "
>
  <h4 class="text-[10px] font-bold tracking-[-0.6px] text-[#FF9500]">Languages</h4>
  <div class="flex flex-1 flex-col justify-between pb-1">
    {#snippet lang(icon: string, label: string)}
      <div class="flex items-center gap-[6px]">
        <img
          src="/languages-icons/{icon}.webp"
          alt="{icon} icon"
          width="12"
          height="12"
          draggable="false"
        />
        <span class="text-[10px] font-medium tracking-[-0.4px]">{label}</span>
      </div>
    {/snippet}
    {#snippet hr()}
      <div class="ml-[17.5px] pt-[3px] pb-[2px]">
        <hr
          class="
            h-0 w-full border-[0.5px] border-x-0 border-b-0 border-dashed
            border-white/30
          "
        />
      </div>
    {/snippet}
    {@render lang('american-english', 'English — Fluent')}
    {@render hr()}
    {@render lang('russian', 'Russian — Native')}
    {@render hr()}
    {@render lang('spanish', 'Spanish — A1')}
  </div>
</XsCard>
