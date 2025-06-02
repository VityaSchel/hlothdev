<script lang="ts">
  import '../app.css'
  import Background from '$lib/widgets/Background.svelte'
  import Nav from '$lib/widgets/Nav.svelte'
  import Squircle from '$lib/Squircle.svelte'
  import JavascriptDisabledMessage from '$lib/widgets/JavascriptDisabledMessage.svelte'

  let { children } = $props()
</script>

<Background>
  <main
    class="drop-background-shadow relative h-[645px] w-[1384px] max-w-full shrink-0 rounded-[32px]"
  >
    <Squircle class="bg-thick" innerStrokeWidth={2} translucent>
      {@render children()}
    </Squircle>
  </main>
  <Nav />
  <JavascriptDisabledMessage />
</Background>

<style>
  .drop-background-shadow {
    box-shadow: 0 14px 80px 0 rgba(0, 0, 0, 0.6);
  }
</style>
