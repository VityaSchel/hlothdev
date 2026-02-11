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
			class="me-card-container @container flex h-full flex-col items-center
				rounded-[16px] text-center select-none"
		>
			<enhanced:img
				class="aspect-square h-auto w-[25cqi] rounded-full bg-cover"
				sizes="25cqi"
				src="$lib/assets/me-avatar.webp?quality=100"
				alt="Me in a suit"
				draggable="false"
				style="background-image: url({meAvatarLqip.lqip}), linear-gradient(to top, var(--color-neutral-600), var(--color-neutral-600));"
			/>
			<div class="flex flex-1 flex-col gap-[2cqi]">
				<h2
					class="text-[7cqi] leading-[6cqi] font-bold tracking-[-0.1px]
						text-thick-typography"
				>
					Viktor Shchelochkov
				</h2>
				<h3
					class="text-[4cqi] leading-[4.5cqi] font-bold tracking-[-0.2px]
						text-thin-alt-typography px1180:text-thin-typography"
				>
					Senior Full Stack Web Developer
				</h3>
				<h3
					class="text-[3.5cqi] leading-[3.5cqi] font-semibold
						text-thick-alt-typography md:text-thin-typography
						px1180:text-[rgba(123,123,123,0.4)]"
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
