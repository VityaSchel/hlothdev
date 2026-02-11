<script lang="ts">
	import Squircle from "$lib/Squircle.svelte";
	import meAvatarLqip from "$lib/assets/me-avatar.webp?lqip";
	import { onMount } from "svelte";
	import { getMyAge } from "./my-age";

	let age = $state(getMyAge());

	onMount(() => {
		let interval: ReturnType<typeof setInterval> | undefined;
		let timeout = setTimeout(
			() => {
				age = getMyAge();
				interval = setInterval(() => {
					age = getMyAge();
				}, 60 * 1000);
			},
			(60 - new Date().getSeconds()) * 1000,
		);
		return () => {
			clearTimeout(timeout);
			if (interval !== undefined) clearInterval(interval);
		};
	});
</script>

<a
	href="/me"
	class="bg-shadow-card-btn relative max-w-full cursor-default rounded-[16px]
		focus-lg px420:flex-1 px1380:flex-[743]"
	style="view-transition-name: me;"
	aria-label="Go to About me page"
>
	<Squircle class="bg-black/10" cornerRadius={16} arrow>
		<div
			class="me-card-container flex h-full flex-col items-center rounded-[16px]
				text-center select-none"
		>
			<enhanced:img
				class="aspect-square h-auto w-[100px] rounded-full bg-cover text-[0px]
					leading-[100px] px530:w-[140px] px530:leading-[140px] md:w-[90px]
					md:leading-[90px] px870:w-[100px] px870:leading-[100px]
					px920:w-[140px] px920:leading-[140px] px1380:w-[164px]
					px1380:leading-[164px]"
				sizes="(1380px <= width) 164px, (920px <= width < 1380px) 140px, (870px <= width < 920px) 100px, (768px <= width < 870px) 90px, (530px <= width < 768px) 140px, (width < 530px) 100px"
				src="$lib/assets/me-avatar.webp?quality=100"
				alt="Me in a suit"
				draggable="false"
				style="background-image: url({meAvatarLqip.lqip}), linear-gradient(to top, var(--color-neutral-600), var(--color-neutral-600));"
			/>
			<div class="flex flex-1 flex-col gap-2 px380:gap-1 px1420:gap-3">
				<div class="flex flex-col gap-2 px380:gap-[3px] lg:gap-1 xl:gap-2">
					<h2
						class="text-xl font-bold tracking-[-0.1px] text-thick-typography
							px330:text-2xl px600:text-3xl px680:text-4xl px680:leading-12
							md:text-xl md:leading-7 px870:text-2xl px1180:text-3xl
							px1180:leading-8 xl:text-4xl px1420:text-5xl
							px1420:leading-[57px]"
					>
						Viktor Shchelochkov
					</h2>
					<h3
						class="text-base leading-4 font-bold tracking-[-0.2px]
							text-thin-alt-typography px530:text-lg px530:leading-5
							px600:text-xl px600:leading-7 px680:text-2xl px680:leading-7
							md:text-base md:leading-5 px870:text-lg px1180:text-xl
							px1180:leading-7 px1180:text-thin-typography xl:text-[22px]
							px1300:text-2xl px1420:text-[28px] px1420:leading-[33px]"
					>
						Senior Full Stack Web Developer
					</h3>
				</div>
				<h3
					class="text-base font-semibold text-thick-alt-typography px530:text-lg
						px530:leading-5 px600:text-xl px600:leading-7 px680:text-2xl
						px680:leading-7 md:text-base md:text-thin-typography px870:text-lg
						lg:text-lg lg:leading-6 px1180:text-[rgba(123,123,123,0.4)]
						xl:text-xl xl:leading-[29px] px1380:text-2xl"
				>
					{age} y.o., Barcelona & Zaragoza, Spain
				</h3>
			</div>
		</div>
	</Squircle>
</a>

<style lang="postcss">
	@reference "tailwindcss";
	.me-card-container {
		@apply gap-3 px-4 py-4;

		@media (min-width: 470px) {
			@apply flex-row text-left;
		}
		@media (min-width: 530px) {
			@apply gap-5;
		}
		@media (min-width: 600px) {
			@apply py-9;
		}
		@media (min-width: 620px) {
			@apply gap-8 px-8;
		}
		@media (min-width: 768px) {
			@apply gap-3 px-4 py-4;
		}
		@media (min-width: 870px) {
			@apply gap-4;
		}
		@media (min-width: 920px) {
			@apply gap-6;
		}
		@media (min-width: 1180px) {
			@apply gap-8 px-8 py-9;
		}
	}
</style>
