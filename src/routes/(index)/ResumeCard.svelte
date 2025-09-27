<script>
	import Squircle from "$lib/Squircle.svelte";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";
</script>

<!-- href="{getMainDomainProtocol()}://cv.{getMainDomain()}" -->
 <!-- TODO: fix -->
<a
href="#"
	rel="nofollow noreferrer noopener"
	target="_blank"
	class="drop-background-shadow relative max-w-full flex-1 shrink-0
		cursor-default rounded-[16px] focus-lg xl:shrink"
	aria-label="Open my developer resume website"
>
	<Squircle class="bg-black/10" cornerRadius={16} arrow>
		<div
			class="flex h-full items-center gap-3 rounded-[16px] p-3 select-none
				px470:gap-4 px470:p-4 md:gap-3 md:py-0 px870:gap-[18px] xl:py-4"
		>
			<div
				class="flex h-8 w-8 items-center justify-center rounded-full
					bg-[#3B82F7] px400:h-12 px400:w-12 md:h-10 md:w-10 px870:h-12
					px870:w-12 lg:h-16 lg:w-16"
				aria-hidden="true"
			>
				<svg
					class="w-4 px400:w-6 md:w-5 px870:w-7"
					viewBox="0 0 57.7188 57.5312"
				>
					<g>
						<rect height="57.5312" opacity="0" width="57.7188" x="0" y="0" />
						<path
							d="M57.5312 9.6875L57.5312 47.875C57.5312 54.3125 54.2812 57.5312 47.7188 57.5312L9.8125 57.5312C3.28125 57.5312 0 54.3125 0 47.875L0 9.6875C0 3.25 3.28125 0 9.8125 0L47.7188 0C54.2812 0 57.5312 3.25 57.5312 9.6875ZM11.5625 44.1562C10.4062 44.1562 9.59375 45 9.59375 46.0938C9.59375 47.1562 10.4062 48 11.5625 48L34.7188 48C35.8438 48 36.6562 47.1562 36.6562 46.0938C36.6562 45 35.8438 44.1562 34.7188 44.1562ZM11.5625 33.4688C10.4062 33.4688 9.59375 34.3125 9.59375 35.375C9.59375 36.4688 10.4062 37.3125 11.5625 37.3125L42.9688 37.3125C44.0625 37.3125 44.875 36.4688 44.875 35.375C44.875 34.3125 44.0625 33.4688 42.9688 33.4688ZM13.125 8.53125C11.125 8.53125 9.90625 9.75 9.90625 11.7188L9.90625 19.5938C9.90625 21.5625 11.125 22.7812 13.125 22.7812L20.9375 22.7812C22.9375 22.7812 24.1562 21.5625 24.1562 19.5938L24.1562 11.7188C24.1562 9.75 22.9375 8.53125 20.9375 8.53125Z"
							fill="white"
							fill-opacity="0.85"
						/>
					</g>
				</svg>
			</div>
			<div class="flex flex-1 flex-col gap-1 md:gap-0 xl:gap-[6px]">
				<span
					class="text-base font-bold tracking-[-0.1px] text-thick-typography
						px400:text-xl md:leading-[38px] px870:text-2xl xl:text-[32px]"
				>
					Jump to resume & CV
				</span>
				<span
					class="hidden text-base leading-[19px] font-semibold
						text-thin-alt-typography px620:block md:hidden lg:block"
				>
					Svelte, React, TypeScript, PostgreSQL, Drizzle, Python
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
