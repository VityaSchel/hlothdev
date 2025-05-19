<script lang="ts">
  import { browser } from '$app/environment'
  import { isIos } from '$lib/utils'
  import { getSvgPath } from 'figma-squircle'

  let {
    class: classes,
    children,
    cornerRadius = 32,
    cornerSmoothing = 0.6,
    innerStrokeWidth = 1,
    translucent,
    arrow
  }: {
    class?: import('svelte/elements').SvelteHTMLElements['div']['class']
    children: import('svelte').Snippet
    cornerRadius?: number
    cornerSmoothing?: number
    innerStrokeWidth?: number
    translucent?: boolean
    arrow?: boolean
  } = $props()

  const uid = $props.id()
  let width = $state(0)
  let height = $state(0)
  const squircle = $derived(
    width && height
      ? getSvgPath({
          width,
          height,
          cornerRadius,
          cornerSmoothing
        })
      : null
  )
</script>

<div
  class="squircle-container relative h-full w-full"
  bind:offsetWidth={width}
  bind:offsetHeight={height}
  style="border-radius: {cornerRadius}px;"
>
  <div
    class={[
      'absolute top-0 left-0 z-[0] h-full w-full',
      classes,
      {
        'backdrop-blur-[48px]': translucent,
        'squircle-card': !browser
      }
    ]}
    style={(squircle === undefined ? '' : `clip-path: path('${squircle}');`) +
      `border-radius: ${cornerRadius}px; --inner-stroke-width: ${innerStrokeWidth / 2}px;`}
  ></div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style="overflow: visible;"
    class="pointer-events-none absolute top-0 left-0 z-[100] h-full w-full"
  >
    <defs>
      <clipPath id="clip-{uid}">
        <path d={squircle} />
      </clipPath>
      <filter id="shadow-{uid}">
        <feGaussianBlur stdDeviation="0.25" />
        <feComponentTransfer>
          <feFuncA type="gamma" exponent={isIos() ? 0.9 : 0.5} amplitude="2" />
        </feComponentTransfer>
        <feComposite operator="out" in2="SourceGraphic" />
      </filter>
    </defs>
    <path
      d={squircle}
      fill="transparent"
      stroke="rgba(255, 255, 255, 0.2)"
      stroke-width="{innerStrokeWidth}px"
      clip-path="url(#clip-{uid})"
    />
    <path d={squircle} fill="black" filter="url(#shadow-{uid})" />
  </svg>
  <div
    class={[
      'relative top-0 left-0 z-[2] h-full w-full',
      {
        'squircle-content-maskable': arrow
      }
    ]}
    style="border-radius: {cornerRadius}px;"
  >
    {@render children()}
  </div>
  {#if arrow}
    <div
      class="squircle-arrow pointer-events-auto absolute top-0 right-0 z-[3] flex h-full w-16 items-center justify-center"
      style="border-radius: {cornerRadius}px;"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
        <path fill="rgba(255, 255, 255, 0.3)" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z" />
      </svg>
    </div>
  {/if}
</div>

<style>
  .squircle-card {
    box-shadow:
      0 0 0px 0.5px black,
      inset 0 0 0px var(--inner-stroke-width) rgba(255, 255, 255, 0.2);
  }
  .squircle-container:hover > .squircle-content-maskable {
    mask-image: linear-gradient(
      to right,
      black 0%,
      black calc(100% - (64px + 10px)),
      transparent calc(100% - (64px - 10px))
    );
  }
  .squircle-container:not(:hover) > .squircle-arrow {
    opacity: 0;
  }
  .squircle-container:hover > .squircle-arrow {
    opacity: 100;
  }
</style>
