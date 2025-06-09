<script lang="ts">
  import '../app.css'
  import '../tailwind.css'
  import Background from '$lib/widgets/Background.svelte'
  import Nav from '$lib/widgets/Nav.svelte'
  import { onNavigate } from '$app/navigation'
  import JavascriptDisabledMessage from '$lib/widgets/JavascriptDisabledMessage.svelte'
  import ReducedMotionMessage from '$lib/widgets/ReducedMotionMessage.svelte'

  let { children } = $props()

  // Couldn't find a way to fix z-indexes with CSS only,
  // until we have :has() support for view transition API js is required
  const sendTransitionToFront = (viewId: string) => {
    const style = document.createElement('style')
    style.innerHTML = `
      ::view-transition-group(${viewId}) {
        z-index: 1000;
      }
    `
    style.setAttribute('data-send-transition-to-front', viewId)
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }

  const viewIds = {
    me: [
      ['/(index)', '/me'],
      ['/me', '/(index)']
    ],
    donate: [
      ['/(index)', '/donate'],
      ['/donate', '/(index)']
    ]
  }

  let sendTransitionToFrontTimer: ReturnType<typeof setTimeout> | undefined = $state()

  const unsend = () => {
    document.querySelectorAll('style[data-send-transition-to-front]').forEach((style) => {
      style.remove()
    })
  }

  onNavigate((navigation) => {
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      if (sendTransitionToFrontTimer) {
        unsend()
        clearTimeout(sendTransitionToFrontTimer)
      }
      let viewId = Object.entries(viewIds).find(([, value]) =>
        value.some(
          ([from, to]) => from === navigation.from?.route.id && to === navigation.to?.route.id
        )
      )?.[0]
      if (viewId) {
        sendTransitionToFront(viewId)
        sendTransitionToFrontTimer = setTimeout(() => {
          unsend()
        }, 500)
      }
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })
</script>

<Background>
  {@render children()}
  <Nav />
  <div
    class="
      fixed right-0 bottom-15 z-[2000] flex max-w-full flex-col-reverse
      items-end gap-4 px-4
      md:pr-10
    "
  >
    <JavascriptDisabledMessage />
    <ReducedMotionMessage />
  </div>
</Background>
