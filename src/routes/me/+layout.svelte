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
    class="overflow-auto py-5"
  >
    <div
      class="
        relative grid h-[1096px] w-[659px] grid-flow-col grid-cols-5 grid-rows-8
        gap-4
        md:h-[682px] md:w-[1064px] md:grid-cols-8 md:grid-rows-5
        px1180:h-[540px] px1180:w-[1334px] px1180:grid-cols-10
        px1180:grid-rows-4
      "
    >
      {@render children()}
    </div>
  </SubpageWrapper>
</PageWrapper>
