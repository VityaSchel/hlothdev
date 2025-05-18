<script lang="ts">
  import '../app.css'
  import Background from '$lib/widgets/Background.svelte'
  import Nav from '$lib/widgets/Nav.svelte'
  import Squircle from '$lib/Squircle.svelte'

  let { children } = $props()
</script>

<Background>
  <main class="relative h-[645px] w-[1384px] max-w-full">
    <Squircle>
      {@render children()}
    </Squircle>
  </main>
  <Nav />
</Background>
