<script lang="ts">
  let {
    name,
    children,
    childrenCount
  }: {
    name: string
    children: import('svelte').Snippet
    childrenCount: number
  } = $props()

  let scrollX = $state(0)
</script>

<input type="checkbox" class="checkbox hidden" autocomplete="off" id="checkbox-{name}" />
<section
  class="
    checkbox-content flex flex-col gap-4
    px470:gap-[8px]
  "
>
  <div
    class="
      flex items-end justify-between px-4
      px470:px-8
    "
  >
    <h2
      class="
        font-sf-pro-display text-base leading-[19px] font-semibold
        tracking-[-0.2px] select-none
      "
    >
      {name}
    </h2>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <label
      for="checkbox-{name}"
      class="
        font-sf-pro-display text-sm font-medium tracking-[-0.2px]
        text-thin-typography
        hover:underline
      "
      onclick={() => {
        scrollX = 0
      }}
    >
      <span class="show-less">Show Less</span>
      <span class="show-all">
        Show All ({childrenCount})
      </span>
    </label>
  </div>
  <div
    class={[
      `
        scrollbar-thin nowrap-flex wrap-styles gap-[10px] overflow-scroll px-4
        pt-[0.5px] pb-3
        px470:px-8
      `,
      {
        'nowrap-fade-out-mask': scrollX === 0
      }
    ]}
    onscroll={(e) => (scrollX = (e.target as HTMLDivElement).scrollLeft)}
  >
    {@render children()}
  </div>
</section>

<style lang="scss">
  .checkbox-content :global(.banner) {
    max-height: 115px;
  }
  .checkbox:not(:checked) + .checkbox-content {
    .show-less {
      display: none;
    }
    .show-all {
      display: inline;
    }
    .nowrap-fade-out-mask {
      mask: linear-gradient(to right, black 0%, black 90%, transparent 100%);
      mask-size: 200% 100%;
      transition: mask-position 0.5s ease-in-out;

      &:not(:hover) {
        mask-position: 100% 0%;
      }
      &:hover {
        mask-position: 20% 0%;
      }
    }
    .nowrap-flex {
      display: flex;
    }
  }
  .checkbox:checked + .checkbox-content {
    .show-less {
      display: inline;
    }
    .show-all {
      display: none;
    }
    .wrap-styles {
      // grid grid-cols-1 px450:grid-cols-2 px600:grid-cols-3 md:flex md:flex-wrap
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));

      @media screen and (min-width: 450px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media screen and (min-width: 600px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
      }
    }

    @media screen and not (min-width: 768px) {
      :global(.banner) {
        max-height: auto;
      }
    }
  }
</style>
