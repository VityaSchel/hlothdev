<script lang="ts">
	import Squircle from "$lib/Squircle.svelte";
</script>

<a
	href="/donate"
	class="drop-background-shadow relative max-w-full flex-1 cursor-default
		rounded-[16px] focus-lg px680:flex-3/5 md:flex-1 lg:flex-[412]"
	style:view-transition-name="donate"
	aria-label="Open donate to me page"
>
	<Squircle class="bg-black/10" cornerRadius={16} arrow>
		<div
			class="flex h-full items-center gap-3 rounded-[16px] p-3 select-none
				px470:gap-4 px470:p-4 md:gap-3 md:py-2 px870:gap-[18px] px870:py-4"
		>
			<div
				class="flex aspect-square h-8 w-8 items-center justify-center
					rounded-full bg-[#3B82F7] px470:h-12 px470:w-12 md:h-10 md:w-10
					px870:h-12 px870:w-12 lg:h-16 lg:w-16"
				aria-hidden="true"
			>
				<svg
					class="h-5 px470:h-[30px] md:h-[28px] lg:h-[33px]"
					viewBox="0 0 39.8125 70.4688"
				>
					<path
						d="M19.9688 62.8438C30.5312 62.8438 39.625 57.5312 39.625 47.4062C39.625 38.0312 32.2812 34.6875 23.5625 32.5938L17.5625 31.125C11.875 29.75 7.15625 27.2812 7.15625 21.875C7.15625 15.8125 13.625 12.7188 19.9375 12.7188C26.4062 12.7188 31.0938 15.75 32.8125 21.3125C33.3125 22.7812 34.2812 23.7812 35.9062 23.7812C37.5312 23.7812 38.7188 22.6562 38.7188 21C38.7188 18.5 37.0625 15.125 34.9062 12.9688C31.0938 9.15625 25.625 7.375 19.9375 7.375C10.1562 7.375 1.15625 12.5625 1.15625 22.3438C1.15625 31 8.53125 34.9062 16.5625 36.75L22.5938 38.1562C28.5938 39.5625 33.6562 41.75 33.6562 47.875C33.6562 54.75 27.3438 57.5312 20.0312 57.5312C13.125 57.5312 7.53125 54.75 5.875 48.5312C5.40625 47 4.5 46.125 2.90625 46.125C1.15625 46.125 0 47.3125 0 48.875C0 51.7812 1.90625 55.1562 4.0625 57.2188C8.28125 61.1875 14.2188 62.8438 19.9688 62.8438ZM19.8125 70.4375C20.9375 70.4375 21.8438 69.5 21.8438 68.375L21.8438 2.03125C21.8438 0.9375 20.9375 0 19.8125 0C18.6875 0 17.7812 0.9375 17.7812 2.03125L17.7812 68.375C17.7812 69.5 18.6875 70.4375 19.8125 70.4375Z"
						fill="white"
						fill-opacity="0.85"
					/>
				</svg>
			</div>
			<div class="flex flex-1 flex-col gap-0 xl:gap-[6px]">
				<span
					class="text-base font-bold tracking-[-0.1px] text-thick-typography
						px530:text-xl px680:text-base px870:text-xl lg:text-2xl
						xl:text-[32px] xl:leading-[38px]"
				>
					Donate
				</span>
				<span
					class="hidden text-sm leading-[19px] font-semibold tracking-[-0.1px]
						text-thin-alt-typography px680:block md:hidden md:text-base
						lg:block"
				>
					Support open source development
				</span>
			</div>
		</div>
	</Squircle>
</a>

<style>
	.drop-background-shadow {
		box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.25);
	}
</style>
