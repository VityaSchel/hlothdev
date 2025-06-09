<script lang="ts">
  import '../app.css'
  import '../tailwind.css'
  import Background from '$lib/widgets/Background.svelte'
  import Nav from '$lib/widgets/Nav.svelte'
  import { onNavigate } from '$app/navigation'
  import JavascriptDisabledMessage from '$lib/widgets/JavascriptDisabledMessage.svelte'
  import ReducedMotionMessage from '$lib/widgets/ReducedMotionMessage.svelte'
  import ReducedTransparencyMessage from '$lib/widgets/ReducedTransparencyMessage.svelte'
  import type { LayoutProps } from './$types'
  import { browser } from '$app/environment'

  let { children, data }: LayoutProps = $props()

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

  let jsDisabledAlertVisible = $derived(!data.alertsDismissed.jsDisabled)
  let reducedMotionAlertVisible = $derived(!data.alertsDismissed.reducedMotion)
  let reducedTransparencyAlertVisible = $derived(!data.alertsDismissed.reducedTransparency)
  console.log(data)
</script>

<Background>
  {@render children()}
  <Nav />
  <div
    class={[
      `
        fixed right-0 bottom-0 z-[2000] max-w-full flex-col items-end gap-4 px-4
        pt-5 pb-15
        md:pr-10
      `,
      {
        hidden:
          browser &&
          !jsDisabledAlertVisible &&
          !reducedMotionAlertVisible &&
          !reducedTransparencyAlertVisible,
        flex: !browser,
        'motion-reduce:flex': reducedMotionAlertVisible,
        'transparency-reduce:flex': reducedTransparencyAlertVisible
      }
    ]}
  >
    <ReducedTransparencyMessage bind:visible={reducedTransparencyAlertVisible} />
    <ReducedMotionMessage bind:visible={reducedMotionAlertVisible} />
    <JavascriptDisabledMessage bind:visible={jsDisabledAlertVisible} />
    <!-- <div
      class="
        bg-dark-spot pointer-events-none absolute top-0 left-0 z-[-1] h-full
        w-full mask-t-from-80% mask-x-from-80% mask-b-from-60%
      "
    ></div> -->
  </div>
</Background>
<!-- 
<style>
  .bg-dark-spot {
    background-color: rgba(27, 27, 27, 0.7);
  }
</style> -->
