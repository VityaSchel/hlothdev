<script lang="ts">
  import XsCard from '$lib/widgets/grid-cards/XSCard.svelte'
</script>

<XsCard
  class="
    container-size col-start-1 col-end-2 row-start-8 row-end-9 bg-[#2E2E2E]
    text-white
    px580:row-start-5 px580:row-end-6
    md:col-start-6 md:col-end-7 md:row-start-1 md:row-end-2
  "
>
  <!-- prettier-ignore -->
  <div class="
    flex h-full w-full flex-col gap-[3.36cqw] px-[9.24cqw] py-[6.72cqw]
  ">
    <h4 class="text-[8.40cqw] font-bold tracking-[-0.504cqw] text-[#FF9500]">Languages</h4>
    <div class="flex flex-1 flex-col justify-between pb-[3.36cqw]">
      {#snippet lang(icon: string, label: string)}
        <div class="flex items-center gap-[5.04cqw]">
          <img
            src="/languages-icons/{icon}.webp"
            alt="{icon} icon"
            width="12"
            height="12"
            draggable="false"
          />
          <span class="
            text-[8.40cqw] font-medium tracking-[-1cqw]
            @px77:tracking-[-0.8cqw]
            @px84:tracking-[-0.7cqw]
            @px99:tracking-[-0.5cqw]
            @px114:tracking-[-0.336cqw]
          ">{label}</span>
        </div>
      {/snippet}
      {#snippet hr()}
        <div class="ml-[14.70cqw] pt-[2.52cqw] pb-[1.68cqw]">
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
  </div>
</XsCard>
