<script>
	import CardIcon from "$lib/entities/CardIcon.svelte";
	import Squircle from "$lib/Squircle.svelte";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";
	import CardButton from "./CardButton.svelte";
</script>

<a
	href="{getMainDomainProtocol()}://cv.{getMainDomain()}"
	rel="nofollow noreferrer noopener"
	target="_blank"
	class="bg-shadow-card-btn relative max-w-full flex-1 shrink cursor-default
		rounded-[16px] focus-lg"
	aria-label="Open my developer resume website"
>
	<Squircle class="bg-black/10" cornerRadius={16} arrow>
		<CardButton>
			<CardIcon fallback="Aa" lg>
				<svg
					class="relative z-[1] h-[40cqb] bg-[#3B82F7]"
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
			</CardIcon>
			<div class="flex flex-1 flex-col">
				<span
					class="text-[5.5cqi] leading-[7cqi] font-bold tracking-[-0.1px]
						text-thick-typography"
				>
					Jump to resume & CV
				</span>
				<span
					class="hidden text-[2.75cqi] leading-[4cqi] font-semibold
						text-thin-alt-typography px620:block md:hidden lg:block"
				>
					Svelte, React, TypeScript, Swift, PostgreSQL, Drizzle
				</span>
			</div>
		</CardButton>
	</Squircle>
</a>
