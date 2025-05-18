<script lang="ts">
  import { browser } from '$app/environment'
  import { getSvgPath } from 'figma-squircle'

  let {
    class: classes,
    children,
    cornerRadius = 32,
    cornerSmoothing = 0.6
  }: {
    class?: import('svelte/elements').SvelteHTMLElements['div']['class']
    children: import('svelte').Snippet
    cornerRadius?: number
    cornerSmoothing?: number
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

<div class="relative h-full w-full" bind:offsetWidth={width} bind:offsetHeight={height}>
  <div
    class={[
      'backdrop-blur-thick absolute top-0 left-0 z-[0] h-full w-full',
      classes,
      {
        card: !browser
      }
    ]}
    style={(squircle === undefined ? '' : `clip-path: path('${squircle}');`) +
      `border-radius: ${cornerRadius}px;`}
  ></div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style="overflow: visible;"
    class="absolute top-0 left-0 z-[1] h-full w-full"
  >
    <defs>
      <clipPath id="clip-{uid}">
        <path d={squircle} />
      </clipPath>
      <filter id="shadow-{uid}">
        <feGaussianBlur stdDeviation="0.25" />
        <feComponentTransfer>
          <feFuncA type="gamma" exponent="0.5" amplitude="2" />
        </feComponentTransfer>
        <feComposite operator="out" in2="SourceGraphic" />
      </filter>
    </defs>
    <path
      d={squircle}
      fill="transparent"
      stroke="rgba(255, 255, 255, 0.2)"
      stroke-width="2px"
      clip-path="url(#clip-{uid})"
    />
    <path d={squircle} fill="black" filter="url(#shadow-{uid})" />
  </svg>
  <div class="relative top-0 left-0 z-[2] h-full w-full">
    {@render children()}
  </div>
</div>

<style>
  .card {
    box-shadow:
      0 0 0px 0.5px black,
      inset 0 0 0px 1px rgba(255, 255, 255, 0.2);
  }
</style>
