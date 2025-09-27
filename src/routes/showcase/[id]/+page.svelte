<script lang="ts">
	import { showcase } from "$lib/showcase";
	import PageWrapper from "$lib/widgets/PageWrapper.svelte";
	import SubpageWrapper from "$lib/widgets/SubpageWrapper.svelte";
	import { error } from "@sveltejs/kit";
	import type { PageProps } from "./$types";
	import PageMetadata from "$lib/widgets/PageMetadata.svelte";

	let { data }: PageProps = $props();
	const project = $derived(showcase.find((p) => p.id === data.id));
	$effect(() => {
		if (!project) error(404);
	});
</script>

{#if project}
	<PageMetadata name={project.name} description={project.shortDescription} />
	<PageWrapper viewId="showcase-{project.id}" class="showcase-view-transition">
		<SubpageWrapper
			class="overflow-auto rounded-b-[32px] focus-scrollable"
			title="{project.id}.svelte"
			srTitle="Showcase project page: {project.name}"
			backUrl="/"
		>
			<div class="flex flex-col gap-4 overflow-auto md:flex-row px870:gap-8">
				<div class="text-content flex flex-3/5 flex-col gap-4 p-2 lg:flex-1">
					<h1 class="text-2xl font-semibold">{project.name}</h1>
					<article
						class="text-base leading-relaxed font-medium"
						aria-label="Project description"
					>
						{@render project.description()}
					</article>
					{#if project.links}
						<div
							class="flex flex-col gap-2"
							role="list"
							aria-label="Project links"
						>
							{#each project.links as { url, label }, i (i)}
								<a
									href={url}
									draggable="false"
									target="_blank"
									rel="noopener noreferrer nofollow"
								>
									{label}
								</a>
							{/each}
						</div>
					{/if}
				</div>
				<div
					class=" grid flex-2/5 grid-cols-1 gap-4 px600:grid-cols-2 md:flex md:flex-col lg:flex-1"
					role="list"
					aria-label="Project images"
				>
					{#each project.images as { src, lqip, alt, class: className }, i (i)}
						<div class={className}>
							<enhanced:img
								{src}
								{alt}
								class="rounded-md bg-neutral-600 bg-cover text-center text-[0px] outline-[0.5px] outline-offset-[-0.5px] outline-white/25"
								style="background-image: url({lqip.lqip}), linear-gradient(to bottom, var(--color-neutral-600), var(--color-neutral-600));"
								loading={i === 0 ? "eager" : "lazy"}
							/>
						</div>
					{/each}
				</div>
			</div>
		</SubpageWrapper>
	</PageWrapper>
{/if}

<style lang="scss">
	article :global(h2) {
		font-size: 1.25rem;
		font-weight: 600;
		margin-top: 1rem;
	}
	.text-content :global(a) {
		width: fit-content;
		line-height: 20px;
		font-weight: 500;
		color: lch(64.02% 56.14 274.89);
		&:active {
			color: oklch(80.9% 0.105 251.813);
		}
	}
	article :global(p + p) {
		margin-top: 0.5rem;
	}
</style>
