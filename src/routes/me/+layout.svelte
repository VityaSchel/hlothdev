<script lang="ts">
  import { page } from '$app/state'
  import PageWrapper from '$lib/widgets/PageWrapper.svelte'
  import SubpageWrapper from '$lib/widgets/SubpageWrapper.svelte'

  let {
    children
  }: {
    children: import('svelte').Snippet
  } = $props()

  let isSubpage = $derived(page.route.id !== '/me')
</script>

<PageWrapper viewId="me">
  <SubpageWrapper
    title="me.svelte"
    backUrl="/"
    button={{ href: 'https://cv.hloth.dev', external: true, text: 'Open Developer Resume' }}
    class="overflow-auto rounded-b-[32px] py-5"
  >
    <div
      class={[
        `
          relative m-auto grid shrink-0 grid-flow-col grid-cols-3 grid-rows-13
          gap-4
          px470:grid-cols-5 px470:grid-rows-8
          md:grid-cols-8 md:grid-rows-5
          px1180:grid-cols-10 px1180:grid-rows-4
        `,
        {
          'h-[1799px] w-[389px] px470:h-[1096px] px470:w-[659px] md:h-[682px] md:w-[1064px] px1180:h-[540px] px1180:w-[1334px]':
            !isSubpage,
          'w-full h-full': isSubpage
        }
      ]}
    >
      {@render children()}
    </div>
  </SubpageWrapper>
</PageWrapper>
