<script lang="ts">
	import { enhance } from "$app/forms";
	import { invalidate } from "$app/navigation";
	import { page } from "$app/state";
	import CloseIcon from "$lib/icons/CloseIcon.svelte";
	import CloseIconRendered from "$lib/icons/CloseIcon.svelte?render";
	import SvgFallback from "$lib/entities/SvgFallback.svelte";

	let {
		id,
		srName,
		class: className,
		children,
		visible = $bindable(false),
	}: {
		id: string;
		srName: string;
		class?: import("svelte/elements").ClassValue;
		children: import("svelte").Snippet;
		visible?: boolean;
	} = $props();

	// This was supposed to be a serverless alert without js
	// but browsers don't save checkbox state across page navigations
</script>

<!-- <input
  type="checkbox"
  {id}
  checked={visible}
  class="peer hidden"
  tabindex={-1}
  aria-hidden="true"
  autocomplete=""
/> -->
<aside
	role="alert"
	class={[
		` animate-in alert-shadow relative max-w-full rounded-[10px]
		bg-gradient-to-br from-[#b5acac] to-[#a3aca0] p-[10px] pr-3 text-right
		leading-[19px] font-medium text-[#373737] transition-opacity
		transparency-reduce:bg-[#b9b9b9] transparency-reduce:[background-image:none]
		[&_br]:hidden sm:[&_br]:block `,
		{
			"opacity-100": visible,
			"animate-none! opacity-0": !visible,
		},
		className,
	]}
>
	<h2 class="sr-only">{srName} alert</h2>
	<form
		action="/?/dismiss"
		class="float-left inline-block h-[19px]"
		method="POST"
		use:enhance={() => {
			visible = false;
			return ({ update, result }) => {
				if (result.type === "success" || result.type === "redirect") {
					invalidate("app:alerts-dismissed");
				} else {
					visible = true;
				}
				update();
			};
		}}
	>
		<input type="hidden" name="redirect" value={page.url.pathname} />
		<input type="hidden" name="alert" value={id} />
		<!-- <label for={id} /> -->
		<button
			class="flex h-full items-center justify-center pr-2 pl-0.5 text-black/50
				[--svg-mask-color:#00000080] active:text-black/70
				active:[--svg-mask-color:#000000b3]"
			draggable="false"
			aria-label="Close {srName} alert"
			type="submit"
		>
			<SvgFallback {...CloseIconRendered} mono fallback="squeeze">
				<CloseIcon />
			</SvgFallback>
		</button>
	</form>
	{@render children()}
</aside>

<style>
	.animate-in {
		animation: fade-in 0.3s ease-in-out;
		animation-name: fade-in, slide-in;
	}
	@media (prefers-reduced-motion: reduce) {
		.animate-in {
			animation-name: fade-in;
		}
	}
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes slide-in {
		from {
			transform: translateY(10px);
		}
		to {
			transform: translateY(0);
		}
	}
	.alert-shadow {
		box-shadow:
			0 4px 35px rgba(0, 0, 0, 0.4),
			0 12px 45px rgba(0, 0, 0, 0.7);
	}
</style>
