<script lang="ts">
  import Portal from 'svelte-portal'

  let {
    children,
    selectedNavItem
  }: {
    children: import('svelte').Snippet
    selectedNavItem: {
      x: number
      y: number
    }
  } = $props()
  let uid = $props.id()
</script>

<Portal>
  <div
    class="
      pointer-events-none fixed top-0 left-0 z-[5] h-full w-full select-none
    "
    role="tooltip"
    aria-labelledby="tooltip-title-{uid}"
  >
    <div
      class="
        pointer-events-none absolute z-[5] flex -translate-x-1/2
        -translate-y-1/2 flex-col items-center
      "
      style="left: {selectedNavItem.x}px; top: {selectedNavItem.y}px"
    >
      <div
        class="
          tooltip-bg font-sf-pro-display flex h-[24px] items-center
          justify-center rounded-[4px] bg-tooltip px-[13px] text-sm font-normal
          tracking-[-0.1px] whitespace-nowrap text-white backdrop-blur-2xl
          transparency-reduce:bg-[#323232]
          transparency-reduce:backdrop-blur-none
        "
        id="tooltip-title-{uid}"
      >
        {@render children()}
      </div>
      <span
        class="
          tooltip-arrow-bg absolute z-[2] bg-[#24381e]
          transparency-reduce:bg-[#323232]
        "
      ></span>
      <svg
        width="60"
        viewBox="0 0 33 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="
          tooltip-arrow relative z-[1] ml-px origin-top scale-x-[35%] scale-y-50
        "
      >
        <g>
          <path
            d="M3.21951 0.499765C3.21951 0.499765 3.22305 0.499746 3.22999 0.499765L28.9756 0.499769C24.9512 0.499769 24.7927 1.15264 23.1829 2.50001C21.5732 3.84737 19.9634 5.53155 18.3537 7.21575L18.3537 7.2158C16.7439 8.90001 15.939 8.90001 14.3293 7.2158C12.7195 5.53159 11.9146 4.52106 9.5 2.50001C7.15845 0.540126 3.4522 0.500376 3.22999 0.499765L3.21951 0.499765Z"
            stroke="black"
            stroke-width="3.25"
            clip-path="url(#tooltip-{uid}-doc)"
          />
          <path
            d="M3.21951 0.499765C3.21951 0.499765 3.22305 0.499746 3.22999 0.499765L28.9756 0.499769C24.9512 0.499769 24.7927 1.15264 23.1829 2.50001C21.5732 3.84737 19.9634 5.53155 18.3537 7.21575L18.3537 7.2158C16.7439 8.90001 15.939 8.90001 14.3293 7.2158C12.7195 5.53159 11.9146 4.52106 9.5 2.50001C7.15845 0.540126 3.4522 0.500376 3.22999 0.499765L3.21951 0.499765Z"
            class="
              fill-[#24381e]
              transparency-reduce:fill-[#323232]
            "
            stroke="rgba(255, 255, 255, 0.25)"
            stroke-width="1"
            clip-path="url(#tooltip-{uid}-doc)"
          />
        </g>
        <defs>
          <clipPath id="tooltip-{uid}" transform="translate(81.5485 81.5487)">
            <path
              d="M3.21951 0.499765C3.21951 0.499765 3.22305 0.499746 3.22999 0.499765L28.9756 0.499769C24.9512 0.499769 24.7927 1.15264 23.1829 2.50001C21.5732 3.84737 19.9634 5.53155 18.3537 7.21575L18.3537 7.2158C16.7439 8.90001 15.939 8.90001 14.3293 7.2158C12.7195 5.53159 11.9146 4.52106 9.5 2.50001C7.15845 0.540126 3.4522 0.500376 3.22999 0.499765L3.21951 0.499765Z"
            />
          </clipPath>
          <clipPath id="tooltip-{uid}-doc">
            <rect x="0" y="1" width="31" height="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</Portal>

<style>
  .tooltip-bg {
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.3),
      0 0 0 2px black;
    clip-path: polygon(
      -5px -5px,
      calc(100% + 5px) -5px,
      calc(100% + 5px) calc(100% + 5px),
      calc(50% + 6px) calc(100% + 5px),
      calc(50% + 6px) calc(100% - 0.5px),
      calc(50% - 5px) calc(100% - 0.5px),
      calc(50% - 5px) calc(100% + 5px),
      -5px calc(100% + 5px),
      -5px -5px
    );
  }
  .tooltip-arrow-bg {
    top: 23.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 11px;
    height: 1.5px;
    z-index: 1;
  }
</style>
