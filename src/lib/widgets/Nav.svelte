<script lang="ts">
	import Squircle from "#lib/Squircle.svelte";
	import NavItem, { type SelectedNavItem } from "#lib/entities/NavItem.svelte";
	import NavSeparator from "#lib/entities/NavSeparator.svelte";
	import Tooltip from "#lib/ui/Tooltip.svelte";
	import { subdomainUrl } from "#lib/utils.ts";
	import { profile, resolveHref, type ProfileLink } from "#lib/profile.ts";
	import upworkIcon from "#lib/assets/dock-icons/upwork.webp?no-inline";
	import forgejoIcon from "#lib/assets/dock-icons/forgejo.webp?no-inline";
	import linkedinIcon from "#lib/assets/dock-icons/linkedin.webp?no-inline";
	import elementIcon from "#lib/assets/dock-icons/element.webp?no-inline";
	import telegramIcon from "#lib/assets/dock-icons/telegram.webp?no-inline";
	import discordIcon from "#lib/assets/dock-icons/discord.webp?no-inline";
	import mailIcon from "#lib/assets/dock-icons/mail.webp?no-inline";
	import blogIcon from "#lib/assets/dock-icons/blog.webp?no-inline";
	import instagramIcon from "#lib/assets/dock-icons/instagram.webp?no-inline";

	let selectedNavItem: SelectedNavItem | null = $state(null);

	const dock = (id: keyof typeof profile.links) => {
		const item: ProfileLink = profile.links[id];
		return {
			name: item.title,
			link: resolveHref(item.href, subdomainUrl),
			highlight: item.highlight,
		};
	};
</script>

<nav
	class="nav-fake-view-transition relative h-[65px] shrink-0 rounded-[16px]
		backdrop-blur-[48px] select-none transparency-reduce:backdrop-blur-none"
	onpointerleave={() => (selectedNavItem = null)}
	id="footer-nav"
	aria-label="Dock-style navigation bar"
>
	{#if selectedNavItem !== null}
		<Tooltip x={selectedNavItem.x} y={selectedNavItem.y}>
			{selectedNavItem.name}
		</Tooltip>
	{/if}
	<Squircle
		class="bg-thick transparency-reduce:bg-opaque-row"
		cornerRadius={16}
	>
		<div class="flex items-center gap-[2px] px-[5px]">
			<NavItem
				{...dock("upwork")}
				icon={upworkIcon}
				alt="Upwork icon"
				class="hidden px500:block"
				bind:selectedNavItem
			/>
			<NavItem
				{...dock("forgejo")}
				icon={forgejoIcon}
				alt="Forgejo icon"
				bind:selectedNavItem
			/>
			<NavItem
				{...dock("linkedin")}
				icon={linkedinIcon}
				alt="Linkedin icon"
				class="hidden px400:block"
				bind:selectedNavItem
			/>
			<NavSeparator class="hidden px600:block" />
			<NavItem
				{...dock("matrix")}
				icon={elementIcon}
				alt="Element icon"
				bind:selectedNavItem
			/>
			<NavItem
				{...dock("telegram")}
				icon={telegramIcon}
				alt="Telegram icon"
				class="hidden px350:block"
				bind:selectedNavItem
			/>
			<NavItem
				{...dock("discord")}
				icon={discordIcon}
				alt="Discord icon"
				class="hidden px500:block"
				bind:selectedNavItem
			/>
			<NavSeparator class="hidden px600:block" />
			<NavItem
				{...dock("email")}
				icon={mailIcon}
				alt="Email icon"
				bind:selectedNavItem
			/>
			<NavItem
				{...dock("blog")}
				icon={blogIcon}
				alt="My blog icon"
				class="hidden px300:block"
				bind:selectedNavItem
			/>
			<NavItem
				{...dock("instagram")}
				icon={instagramIcon}
				alt="Instagram icon"
				bind:selectedNavItem
			/>
		</div>
	</Squircle>
</nav>
