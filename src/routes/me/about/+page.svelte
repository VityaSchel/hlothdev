<script lang="ts">
	import { MediaQuery } from "svelte/reactivity";
	import PageMetadata from "#lib/widgets/PageMetadata.svelte";
	import GreetingsCard from "../GreetingsCard.svelte";
	import CloseSubpageLink from "../CloseSubpageLink.svelte";
	import meInPinkHatLqip from "#lib/assets/me-in-pink-hat.webp?lqip";
	import { morphName } from "#lib/view-transition.svelte.ts";
	import { profile } from "#lib/profile.ts";

	const uid = $props.id();
	const wide = new MediaQuery("min-width: 600px", false);
</script>

<PageMetadata name="Think different – About me" />
<GreetingsCard>
	<div
		class="flex h-full"
		style:--morph-name="about-me-content"
		style:view-transition-name={morphName("about-me-content")}
	>
		<div
			class="relative flex min-w-0 flex-4/5 flex-col items-start gap-6
				overflow-auto rounded-l-[55px] focus-scrollable px500:flex-2/3
				px600:flex-row px600:p-[34px] md:flex-1 px980:flex-3/5 px980:gap-[34px]
				px1100:flex-[62]"
		>
			<nav
				class="absolute top-6 left-6 z-1 shrink-0 px600:sticky px600:top-0
					px600:left-0"
			>
				<CloseSubpageLink />
			</nav>
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<div
				class="mt-16 overflow-auto mask-t-from-95% p-7 pt-4 focus-scrollable
					px600:mt-0 px600:overflow-visible px600:mask-none px600:p-0"
				tabindex={wide.current ? undefined : 0}
				role="region"
				aria-labelledby="heading-{uid}"
			>
				<div
					class="flex flex-1 flex-col text-base leading-relaxed font-medium
						px600:text-lg px980:text-xl px980:leading-[35px]"
				>
					<h1
						id="heading-{uid}"
						class="indent-hanging mb-4 text-3xl font-bold px980:mb-7
							px980:text-[39px] px980:leading-[37px]"
					>
						{profile.about.title}
						<br />
						<span class="text-2xl font-semibold px980:text-[29px]">
							{profile.about.subtitle}
						</span>
					</h1>
					{#each profile.about.paragraphs as paragraph, i (i)}
						{#if i === 0}
							<p>{paragraph}</p>
						{:else}
							<p class="mt-3">{paragraph}</p>
						{/if}
					{/each}
				</div>
			</div>
		</div>
		<div
			class="relative hidden h-full min-w-0 flex-1/5 px450:block px500:flex-1/3
				md:flex-1 px980:flex-2/5 px1100:flex-[32]"
		>
			<enhanced:img
				class="absolute top-0 left-0 size-full bg-neutral-200 object-cover
					object-[52%_50%]"
				src="#lib/assets/me-in-pink-hat.webp"
				style="background: url({meInPinkHatLqip.lqip}) center / cover
					no-repeat;"
				alt="Me in a pink hat"
				width="904"
			/>
		</div>
	</div>
</GreetingsCard>

<style>
	.indent-hanging {
		text-indent: -0.35em;
	}
</style>
