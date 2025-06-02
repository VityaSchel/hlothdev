<script lang="ts">
  import '../app.css'
  import '../tailwind.css'
  import Background from '$lib/widgets/Background.svelte'
  import Nav from '$lib/widgets/Nav.svelte'
  import JavascriptDisabledMessage from '$lib/widgets/JavascriptDisabledMessage.svelte'
  import { onNavigate } from '$app/navigation'

  let { children } = $props()

  onNavigate((navigation) => {
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
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
  <JavascriptDisabledMessage />
</Background>
