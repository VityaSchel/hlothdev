<script lang="ts">
	import Squircle from "$lib/Squircle.svelte";
	import NavItem from "$lib/entities/NavItem.svelte";
	import NavSeparator from "$lib/entities/NavSeparator.svelte";
	import Tooltip from "$lib/ui/Tooltip.svelte";
	import { navItems } from "$lib/widgets/navbar";

	let selectedNavItem: {
		element: HTMLElement;
		name: string;
		x: number;
		y: number;
	} | null = $state(null);
</script>

<nav
	class="nav-fake-view-transition relative h-[65px] shrink-0 rounded-[16px]
		backdrop-blur-[48px] select-none transparency-reduce:bg-transparent
		transparency-reduce:backdrop-blur-none"
	onpointerleave={() => (selectedNavItem = null)}
	id="footer-nav"
>
	{#if selectedNavItem !== null}
		<Tooltip {selectedNavItem}>{selectedNavItem.name}</Tooltip>
	{/if}
	<Squircle
		class="bg-thick transparency-reduce:bg-opaque-row"
		cornerRadius={16}
	>
		<div class="flex items-center gap-[2px] px-[5px]">
			{#each navItems as item (item.id)}
				{#if 'separator' in item}
					<NavSeparator class={item.class} />
				{:else}
					<NavItem
						icon={item.icon}
						alt={item.alt}
						class={item.class}
						highlight={item.highlight}
						link={item.link}
						name={item.name}
						bind:selectedNavItem
					/>
				{/if}
			{/each}
		</div>
	</Squircle>
</nav>
