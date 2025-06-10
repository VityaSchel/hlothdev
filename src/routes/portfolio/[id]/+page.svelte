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
    <SubpageWrapper
      class="overflow-auto rounded-b-[32px] focus-scrollable"
      title="{project.id}.svelte"
      srTitle="Portfolio project page: {project.name}"
      backUrl="/"
    >
      <div
        class="
          flex flex-col gap-4 overflow-auto
          md:flex-row
          px870:gap-8
        "
      >
        <div
          class="
            flex flex-3/5 flex-col gap-4 p-2
            lg:flex-1
          "
        >
          <h1 class="text-2xl font-semibold">{project.name}</h1>
          <article class="text-base leading-relaxed font-medium">
            {@render project.description()}
          </article>
          <div class="flex flex-col gap-2" role="list" aria-label="Project links">
            {#each project.links as { url, label }, i (i)}
              <a
                href={url}
                class="
                  w-fit leading-5 font-medium text-[#429EFF]
                  active:text-blue-300
                "
                draggable="false"
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            {/each}
          </div>
        </div>
        <div
          class="
            grid flex-2/5 grid-cols-1 gap-4
            px600:grid-cols-2
            md:flex md:flex-col
            lg:flex-1
          "
          role="list"
          aria-label="Project images"
        >
          {#each project.images as { url, alt }, i (i)}
            <img
              src={url}
              {alt}
              class="
                rounded-md outline-[0.5px] outline-offset-[-0.5px]
                outline-white/25
              "
            />
          {/each}
        </div>
      </div>
    </SubpageWrapper>
  </PageWrapper>
{/if}

<style>
  article :global(h2) {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1rem;
  }
</style>
