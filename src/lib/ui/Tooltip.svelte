<script lang="ts">
	import Portal from "svelte-portal";

	let {
		children,
		selectedNavItem,
	}: {
		children: import("svelte").Snippet;
		selectedNavItem: {
			x: number;
			y: number;
		};
	} = $props();
	let uid = $props.id();
</script>

<Portal>
	<div
		class="pointer-events-none fixed top-0 left-0 z-[5] h-full w-full
			select-none"
	>
		<div
			class="tooltip-container pointer-events-none absolute z-[5] flex
				-translate-x-1/2 -translate-y-1/2 flex-col items-center"
			style="left: {selectedNavItem.x}px; top: {selectedNavItem.y - 8}px"
			role="tooltip"
			aria-labelledby="tooltip-title-{uid}"
		>
			<div
				class="font-sf-pro-display tooltip relative flex items-center
					justify-center bg-tooltip text-sm text-[16px] font-light
					whitespace-nowrap text-white backdrop-blur-2xl
					transparency-reduce:bg-[#323232]
					transparency-reduce:backdrop-blur-none"
				id="tooltip-title-{uid}"
			>
				{@render children()}
			</div>
			<span
				class="tooltip-border absolute top-0 left-0 box-border border
					border-white/20"
			></span>
			<span
				class="tooltip-arrow-border tooltip-arrow-border-black absolute
					box-border"
			></span>
			<span
				class="tooltip-arrow-border tooltip-arrow-border-white absolute
					box-border"
			></span>
		</div>
	</div>
</Portal>

<style lang="scss">
	// here goes about 10 hours of my life

	.tooltip-container {
		--radius: 4px;
		--arrow-height: 10px;
		--font-size: 14px;

		--arrow-aspect-ratio: calc(38 / 16);
		--arrow-width: calc(var(--arrow-aspect-ratio) * var(--arrow-height));

		.tooltip {
			mask-image:
				radial-gradient(#fff calc(var(--radius) - 0.35px), #fff0 var(--radius)),
				radial-gradient(#fff calc(var(--radius) - 0.35px), #fff0 var(--radius)),
				radial-gradient(#fff calc(var(--radius) - 0.35px), #fff0 var(--radius)),
				radial-gradient(#fff calc(var(--radius) - 0.35px), #fff0 var(--radius)),
				linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
				url('data:image/svg+xml;utf8,<svg viewBox="0 0 38 16" xmlns="http://www.w3.org/2000/svg"><path d="M0 0c12 0 17.498 15.5 19 15.5S26 0 38 0z" /></svg>');
			mask-position:
				/* == top left */
				0 0,
				/* == top right */ 100% 0,
				/* bottom left */ 0 calc(100% - var(--arrow-height)),
				/* bottom right */ 100% calc(100% - var(--arrow-height)),
				/* horizontal */ 0 var(--radius),
				/* vertical */ var(--radius) 0,
				/* arrow */ calc(50% + 0.5px) 100%;
			mask-size:
				/* top left */
				calc(var(--radius) * 2) calc(var(--radius) * 2),
				/* top right */ calc(var(--radius) * 2) calc(var(--radius) * 2),
				/* bottom left */ calc(var(--radius) * 2) calc(var(--radius) * 2),
				/* bottom right */ calc(var(--radius) * 2) calc(var(--radius) * 2),
				/* horizontal */ 100%
					calc(100% - calc(var(--radius) * 2) - var(--arrow-height)),
				/* vertical */ calc(100% - calc(var(--radius) * 2))
					calc(100% - var(--arrow-height)),
				/* arrow */ var(--arrow-width) var(--arrow-height);
			mask-repeat: no-repeat;
			// background: rgba(50, 50, 50, 0.55);
			color: white;
			font-weight: 400;
			font-size: var(--font-size);
			letter-spacing: -1.5%;
			padding: calc(0.15625 * var(--font-size)) var(--font-size)
				calc(var(--arrow-height) + calc(0.25 * var(--font-size)))
				var(--font-size);
		}

		.tooltip-border {
			width: calc(100% - 0.5px);
			height: calc(100% - var(--arrow-height) - 0.5px);
			border-radius: calc(var(--radius) + 0.5px);
			box-shadow: 0 0 0 1px black;
			--offset: 2px;
			$top: calc(0% - var(--offset));
			$left: calc(0% - var(--offset));
			$bottom: calc(100% + var(--offset));
			$right: calc(100% + var(--offset));
			$half-arrow: calc(var(--arrow-width) / 2 - 3.5px);
			clip-path: polygon(
				$left $top,
				$right $top,
				$right $bottom,
				calc(50% + $half-arrow + 1px) $bottom,
				calc(50% + $half-arrow + 1px) calc($bottom - 3px),
				calc(50% - $half-arrow + 0.5px) calc($bottom - 3px),
				calc(50% - $half-arrow + 0.5px) $bottom,
				$left $bottom
			);
		}

		.tooltip-arrow-border-black {
			background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAzOCAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzcuNSAwLjVWOS41MDk3N0MzMS41MjM5IDkuNzE4MDEgMjcuMTc4OCAxMy42MzQyIDI0LjE3MDkgMTcuNDQwNEMyMi42MjA2IDE5LjQwMjMgMjEuNDAzMSAyMS4zNjIgMjAuNDkxMiAyMi44MTE1QzIwLjAzMDkgMjMuNTQzMyAxOS42NTgyIDI0LjEzIDE5LjM1NTUgMjQuNTM0MkMxOS4yMDcxIDI0LjczMjIgMTkuMDg5MiAyNC44NjYzIDE5IDI0Ljk0ODJDMTguOTEwOCAyNC44NjYzIDE4Ljc5MjkgMjQuNzMyMiAxOC42NDQ1IDI0LjUzNDJDMTguMzQxOCAyNC4xMyAxNy45NjkxIDIzLjU0MzMgMTcuNTA4OCAyMi44MTE1QzE2LjU5NjkgMjEuMzYyIDE1LjM3OTQgMTkuNDAyMyAxMy44MjkxIDE3LjQ0MDRDMTAuODIxMiAxMy42MzQyIDYuNDc2MTEgOS43MTgwMSAwLjUgOS41MDk3N1YwLjVIMzcuNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41IiAvPjwvc3ZnPg==');
			background-repeat: no-repeat;
			z-index: 1;
			bottom: 0.3px;
		}

		.tooltip-arrow-border-white {
			background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAzOCAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzcuNSAwLjVWOS41MDk3N0MzMS41MjM5IDkuNzE4MDEgMjcuMTc4OCAxMy42MzQyIDI0LjE3MDkgMTcuNDQwNEMyMi42MjA2IDE5LjQwMjMgMjEuNDAzMSAyMS4zNjIgMjAuNDkxMiAyMi44MTE1QzIwLjAzMDkgMjMuNTQzMyAxOS42NTgyIDI0LjEzIDE5LjM1NTUgMjQuNTM0MkMxOS4yMDcxIDI0LjczMjIgMTkuMDg5MiAyNC44NjYzIDE5IDI0Ljk0ODJDMTguOTEwOCAyNC44NjYzIDE4Ljc5MjkgMjQuNzMyMiAxOC42NDQ1IDI0LjUzNDJDMTguMzQxOCAyNC4xMyAxNy45NjkxIDIzLjU0MzMgMTcuNTA4OCAyMi44MTE1QzE2LjU5NjkgMjEuMzYyIDE1LjM3OTQgMTkuNDAyMyAxMy44MjkxIDE3LjQ0MDRDMTAuODIxMiAxMy42MzQyIDYuNDc2MTEgOS43MTgwMSAwLjUgOS41MDk3N1YwLjVIMzcuNVoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIiBzdHJva2Utd2lkdGg9IjMuNSIgLz48L3N2Zz4=');
			background-repeat: no-repeat;
			bottom: 1.5px;
			clip-path: inset(0px 3.1px 0px 3.45px);
		}

		.tooltip-arrow-border {
			background-size: cover;
			background-position: center bottom;
			width: calc(var(--arrow-width) + 0.25px);
			height: calc(var(--arrow-height) + 0.15px);
			left: calc(50% - (var(--arrow-width) / 2));
			transform: translateY(0.5px);
		}
	}
</style>
