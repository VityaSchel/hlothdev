<script lang="ts">
  import { portfolio } from '$lib/portfolio'
  import PageWrapper from '$lib/widgets/PageWrapper.svelte'
  import SubpageWrapper from '$lib/widgets/SubpageWrapper.svelte'
  import { error } from '@sveltejs/kit'
  import type { PageProps } from './$types'

  let { data }: PageProps = $props()
  const project = $derived(portfolio.find((p) => p.id === data.id))
  $effect(() => {
    if (!project) error(404)
  })
</script>

{#if project}
  <PageWrapper viewId="project-{project.id}">
    <SubpageWrapper title="{project.id}.svelte" backUrl="/" class="overflow-auto">
      <div class="flex gap-8 overflow-auto">
        <div class="flex flex-1 flex-col gap-4 p-2">
          <h1 class="text-2xl font-semibold">{project.name}</h1>
          <article class="text-base leading-relaxed font-medium">
            {@render project.description()}
          </article>
        </div>
        <div class="flex flex-1 flex-col gap-4">
          {#each project.images as { url, alt }, i (i)}
            <img src={url} {alt} class="outline-white/25 outline-[0.5px] outline-offset-[-0.5px] rounded-md" />
          {/each}
        </div>
      </div>
    </SubpageWrapper>
  </PageWrapper>
{/if}
