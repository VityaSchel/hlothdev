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
        relative grid h-[682px] w-[1064px] grid-flow-col grid-cols-8 grid-rows-5
        gap-4
        px1178:h-[540px] px1178:w-[1334px] px1178:grid-cols-10
        px1178:grid-rows-4
      "
    >
      {@render children()}
    </div>
  </SubpageWrapper>
</PageWrapper>
