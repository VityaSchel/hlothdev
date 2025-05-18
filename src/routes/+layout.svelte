<script lang="ts">
  import '../app.css'
  import Background from '$lib/widgets/Background.svelte'
  import Nav from '$lib/widgets/Nav.svelte'
  import Squircle from '$lib/Squircle.svelte'

  let { children } = $props()
</script>

<Background>
  <div class="h-[645px] w-[1384px] max-w-full">
    <main class="relative h-full w-full rounded-4xl">
      <Squircle>
        {@render children()}
      </Squircle>
    </main>
  </div>
  <Nav />
</Background>
