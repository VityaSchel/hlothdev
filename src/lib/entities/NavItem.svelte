<script lang="ts">
  import { browser } from '$app/environment'

  let {
    icon,
    highlight,
    name,
    class: className,
    link,
    selectedNavItem = $bindable()
  }: {
    icon: string
    name: string
    highlight?: boolean
    link: string
    class?: import('svelte/elements').ClassValue
    selectedNavItem: {
      element: HTMLElement
      name: string
      x: number
      y: number
    } | null
  } = $props()

  // JS ONLY:
  // There is no way to differentiate between a pressed state and drag in CSS with :active pseudoclass
  let pressed = $state(false)
  let showHighlight = $state(true)

  let a: HTMLAnchorElement

  const setTooltip = () => {
    const rect = a.getBoundingClientRect()
    selectedNavItem = {
      element: a,
      name,
      x: rect.left + rect.width / 2,
      y: rect.top - 20
    }
  }

  let dragging = $state(false)
  $effect(() => {
    if (selectedNavItem !== null && selectedNavItem.element === a) {
      const resize = () => {
        if (selectedNavItem !== null && selectedNavItem.element === a) {
          setTooltip()
        }
      }
      document.addEventListener('resize', resize)
      return () => {
        document.removeEventListener('resize', resize)
      }
    }
  })
</script>

<a
  href={link}
  rel="nofollow noopener noreferrer"
  target="_blank"
  class={[
    `
      nav-item group flex shrink-0 cursor-default flex-col items-center
      gap-[3px] self-stretch pt-[5px] pb-[3px] select-none
      focus-sm
    `,
    className
  ]}
  onpointerenter={() => {
    if (!dragging) {
      setTooltip()
    }
  }}
  onpointerdown={() => {
    pressed = true
  }}
  onpointerup={() => {
    pressed = false
  }}
  onblur={() => {
    pressed = false
  }}
  ondragstart={() => {
    dragging = true
    selectedNavItem = null
    pressed = false
    showHighlight = false
    setTimeout(() => {
      showHighlight = true
    }, 0)
  }}
  ondragend={() => {
    pressed = false
    dragging = false
  }}
  bind:this={a}
  title={browser ? undefined : name}
>
  <img
    src={icon}
    alt={name}
    class={[
      'h-[50px] w-[50px] text-[0px]',
      {
        'brightness-[48%]': pressed
      }
    ]}
  />
  {#if highlight && showHighlight}
    <span class="h-1 w-1 rounded-full bg-[#7C7C7C]"></span>
  {/if}
</a>
