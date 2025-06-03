<script lang="ts">
  import PageWrapper from '$lib/widgets/PageWrapper.svelte'
  import SubpageWrapper from '$lib/widgets/SubpageWrapper.svelte'

  let {
    children
  }: {
    children: import('svelte').Snippet
  } = $props()
</script>

<PageWrapper viewId="me">
  <SubpageWrapper
    title="me.svelte"
    backUrl="/"
    button={{ href: 'https://cv.hloth.dev', external: true, text: 'Open Developer Resume' }}
  >
    <div class="relative grid h-full grid-flow-col grid-cols-10 grid-rows-4 gap-4">
      {@render children()}
    </div>
  </SubpageWrapper>
</PageWrapper>
