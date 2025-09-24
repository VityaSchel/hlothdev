<script lang="ts">
	import PageMetadata from "$lib/widgets/PageMetadata.svelte";
	import GreetingsCard from "../GreetingsCard.svelte";
</script>

<PageMetadata />
<GreetingsCard>
	<div class="flex h-full" style="view-transition-name: about-me-content;">
		<div
			class="relative flex min-w-0 flex-4/5 flex-col items-start gap-6
				overflow-auto rounded-l-[55px] focus-scrollable px500:flex-2/3
				px600:flex-row px600:p-[34px] md:flex-1 px980:flex-3/5 px980:gap-[34px]
				px1100:flex-[62]"
		>
			<nav
				class="absolute top-6 left-6 z-[1] shrink-0 px600:sticky px600:top-0
					px600:left-0"
			>
				<a
					href="/me"
					aria-label="Go back to the /me page"
					class="flex w-fit cursor-default overflow-clip rounded-full
						text-white/60 focus-lg-dark active:text-neutral-300/80"
					draggable="false"
				>
					<svg
						width="36"
						height="37"
						viewBox="0 0 36 37"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect y="0.5" width="36" height="36" rx="18" fill="currentColor" />
						<path
							d="M24.25 12.25L11.75 24.75M11.75 12.25L24.25 24.75"
							stroke="#161616"
							stroke-opacity="0.8"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</nav>
			<div
				class="mt-16 overflow-auto mask-t-from-95% p-7 pt-4 px600:mt-0
					px600:overflow-visible px600:mask-none px600:p-0"
			>
				<div
					class="flex flex-1 flex-col text-base leading-relaxed font-medium
						px600:text-lg px980:text-xl px980:leading-[35px]"
				>
					<h1
						class="indent-hanging mb-4 text-3xl font-bold px980:mb-7
							px980:text-[39px] px980:leading-[37px]"
					>
						„Think different“
						<br />
						<span class="text-2xl font-semibold px980:text-[29px]">
							is my life slogan
						</span>
					</h1>
					<p>
						Thinking different was a choice I made early in life. As a kid, I
						often felt two steps ahead of my classmates — and out of place
						because of it. While others followed the curriculum, I was tinkering
						with computers, building my first website at 9 and discovering my
						first security vulnerability in my school’s IT system by 15. Instead
						of curiosity, I was met with suspicion.
					</p>
					<p class="mt-3">
						At school IT competitions, most participants showcased recycled
						ideas — generic research, overused robots, or well-known solutions
						for unneeded problems. I think different, so I always focused on
						creativity, innovation, and real-world usefulness, surprising juries
						with modern technologies outstanding from what they're used to.
					</p>
					<p class="mt-3">
						At home, it wasn’t much different. My parents didn’t see value in my
						path and pressured me to study. By 17, I moved into my own apartment
						to create space for the future I believed in. People, whose whole
						goal in life is to serve the country and have two kids, think that a
						progressive young boy announcing he’s moving to Europe with his
						boyfriend is crazy. But I think different.
					</p>
				</div>
			</div>
		</div>
		<div
			class="relative hidden h-full min-w-0 flex-1/5 px450:block px500:flex-1/3
				md:flex-1 px980:flex-2/5 px1100:flex-[32]"
		>
			<enhanced:img
				class="absolute top-0 left-0 h-full w-full bg-neutral-200 object-cover
					object-[52%_50%] text-center"
				src="$lib/assets/me-in-pink-hat.webp"
				alt="Me in a pink hat"
				width="860"
			/>
		</div>
	</div>
</GreetingsCard>

<style>
	.indent-hanging {
		text-indent: -0.35em;
	}
</style>
