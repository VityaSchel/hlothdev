<script lang="ts">
	import KeyboardNavigationSkipLink from "$lib/features/KeyboardNavigationSkipLink.svelte";
	import Proxy from "$lib/entities/Proxy.svelte";

	let {
		button,
		title,
		srTitle,
		children,
		backUrl,
		class: className,
	}: {
		button?: { href: string; external?: boolean; text: string };
		title: string;
		srTitle: string;
		children?: import("svelte").Snippet;
		backUrl: string;
		class?: import("svelte/elements").ClassValue;
	} = $props();
</script>

<div class="flex h-full w-full flex-col">
	<header
		class="border-px flex h-[52px] w-full shrink-0 items-center justify-between
			gap-2 border border-x-0 border-t-0 border-white/25 px-[15px] pl-0"
		aria-label="Page header with title and navigation"
	>
		<div class="flex h-full flex-row items-center">
			<a
				href={backUrl}
				aria-label="Back to previous page"
				class="flex h-full cursor-default items-center justify-center
					rounded-tl-[32px] pr-2 pl-[18px] text-white/55 focus:outline-0
					focus-visible:outline-stone-200/60 active:text-[#EAEAEA]
					focus-visible:[&_svg]:outline-3
					focus-visible:[&_svg]:outline-offset-3"
				draggable="false"
			>
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="rounded-full"
					aria-hidden="true"
				>
					<g>
						<!-- Only Safari supports style="mix-blend-mode:plus-darker" -->
						<path
							d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM8.93262 3.06738C8.60314 2.7379 8.05376 2.74201 7.7373 3.05371L6.00098 4.78516L4.26074 3.0498C3.96194 2.751 3.39064 2.73298 3.06543 3.0625C2.74023 3.3877 2.75391 3.95898 3.05273 4.25781L4.79297 5.99414L3.05273 7.73828C2.75391 8.03711 2.74023 8.60449 3.06543 8.92969C3.39063 9.25927 3.96192 9.2456 4.26074 8.94238L6.00098 7.20215L7.7373 8.93848C8.05375 9.25463 8.60311 9.25431 8.93262 8.9248C9.2575 8.59957 9.25722 8.05068 8.94531 7.73438L7.20996 5.99414L8.94531 4.2627C9.25724 3.94637 9.25756 3.39261 8.93262 3.06738Z"
							fill="currentColor"
						/>
					</g>
				</svg>
			</a>
			<div
				class="group flex flex-row items-center gap-1 text-[15px] font-semibold"
			>
				<Proxy />
				<span class="select-none" aria-hidden="true">
					{title}
				</span>
				<h1 class="sr-only">{srTitle}</h1>
			</div>
		</div>
		{#if button}
			<a
				href={button.href}
				rel={button.external ? "noreferrer noopener" : undefined}
				target={button.external ? "_blank" : undefined}
				class="
          flex h-[22px] min-w-0 cursor-default items-center justify-center
          rounded-md border border-[#b6a68e]/40 px-[7px] text-[13px]
          text-[#ede1cf]/90 focus-sm select-none
          hover:border-transparent hover:bg-[#b6a68e]/50
          active:border-transparent active:bg-[#b6a68e]/80 active:text-[#f7efe2]
          transparency-reduce:border-white/7
          transparency-reduce:text-zinc-400 transparency-reduce:hover:bg-white/7
          active:transparency-reduce:bg-white/20
          transparency-reduce:active:text-zinc-200
        "
				draggable="false"
			>
				<span class="max-w-full min-w-0 truncate">
					{button.text}
				</span>
			</a>
		{/if}
	</header>
	<KeyboardNavigationSkipLink class="top-15 left-2" id="footer-nav">
		Skip to footer navigation
	</KeyboardNavigationSkipLink>
	<div
		class={[" max-h-[calc(100%-52px)] flex-1 p-4 px470:p-[25px] ", className]}
		role="main"
	>
		{@render children?.()}
	</div>
</div>
