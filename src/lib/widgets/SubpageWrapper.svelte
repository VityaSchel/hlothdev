<script lang="ts">
	import KeyboardNavigationSkipLink from "$lib/features/KeyboardNavigationSkipLink.svelte";
	import Proxy from "$lib/entities/Proxy.svelte";
	import SvgFallback from "$lib/entities/SvgFallback.svelte";
	import CloseIcon from "$lib/icons/CloseIcon.svelte";
	import CloseIconRendered from "$lib/icons/CloseIcon.svelte?render";

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

<div class="flex size-full flex-col">
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
					rounded-tl-[32px] pr-2 pl-[18px] text-white/55
					[--svg-mask-color:#ffffff8c] focus:outline-0
					focus-visible:outline-stone-200/60 active:text-[#EAEAEA]
					active:[--svg-mask-color:#eaeaea] focus-visible:[&_svg]:outline-3
					focus-visible:[&_svg]:outline-offset-3"
				draggable="false"
			>
				<SvgFallback {...CloseIconRendered} mono fallback="squeeze">
					<CloseIcon />
				</SvgFallback>
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
		class={["max-h-[calc(100%-52px)] flex-1 p-4 px470:p-[25px]", className]}
		role="main"
	>
		{@render children?.()}
	</div>
</div>
