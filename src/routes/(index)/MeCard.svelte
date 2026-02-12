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
	class="bg-shadow-card-btn @container-[size] relative max-w-full flex-1
		cursor-default rounded-[16px] focus-lg md:flex-[743]"
	style="view-transition-name: me;"
	aria-label="Go to About me page"
>
	<Squircle
		class="bg-black/10"
		containerClass="@container-[size]"
		cornerRadius={16}
		arrow
	>
		<div
			class="@container flex h-full flex-col items-center justify-center
				gap-[6cqb] rounded-[16px] px-[4cqi] py-[2cqi] select-none
				max-px470:text-center px470:flex-row px470:gap-[12cqb]"
		>
			<enhanced:img
				class="aspect-square h-auto w-[35cqi] rounded-full bg-cover
					px420:w-[25cqi]"
				sizes="35cqi, (max-width: 470px) 25cqi"
				src="$lib/assets/me-avatar.webp?quality=100"
				alt="Me in a suit"
				draggable="false"
				style="background-image: url({meAvatarLqip.lqip}), linear-gradient(to top, var(--color-neutral-600), var(--color-neutral-600));"
			/>
			<div
				class="flex flex-col gap-[3.5cqi] px420:gap-[2.5cqi] px470:flex-1
					lg:gap-[2cqi]"
			>
				<h2
					class="text-[8cqi] leading-[6cqi] font-bold tracking-[-0.1px]
						text-thick-typography px420:text-[7cqi]"
				>
					Viktor Shchelochkov
				</h2>
				<h3
					class="text-[5cqi] leading-[4.5cqi] font-bold tracking-[-0.2px]
						text-thin-alt-typography px420:text-[4cqi]
						px1180:text-thin-typography"
				>
					Senior Full Stack Web Developer
				</h3>
				<h3
					class="text-[4cqi] leading-[3.5cqi] font-semibold
						text-thick-alt-typography px420:text-[3.5cqi]
						md:text-thin-typography px1180:text-[rgba(123,123,123,0.4)]"
				>
					{age} y.o., Barcelona & Zaragoza, Spain
				</h3>
			</div>
		</div>
	</Squircle>
</a>
