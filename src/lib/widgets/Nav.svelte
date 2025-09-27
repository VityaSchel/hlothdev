<script lang="ts">
	import Squircle from "$lib/Squircle.svelte";
	import NavItem from "$lib/entities/NavItem.svelte";
	import NavSeparator from "$lib/entities/NavSeparator.svelte";
	import Tooltip from "$lib/ui/Tooltip.svelte";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";
	import upworkIcon from "$lib/assets/dock-icons/upwork.webp?inline";
	import forgejoIcon from "$lib/assets/dock-icons/forgejo.webp?inline";
	import linkedinIcon from "$lib/assets/dock-icons/linkedin.webp?inline";
	import elementIcon from "$lib/assets/dock-icons/element.webp?inline";
	import telegramIcon from "$lib/assets/dock-icons/telegram.webp?inline";
	import discordIcon from "$lib/assets/dock-icons/discord.webp?inline";
	import mailIcon from "$lib/assets/dock-icons/mail.webp?inline";
	import blogIcon from "$lib/assets/dock-icons/blog.webp?inline";
	import instagramIcon from "$lib/assets/dock-icons/instagram.webp?inline";

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
	aria-label="Dock-style navigation bar"
>
	{#if selectedNavItem !== null}
		<Tooltip {selectedNavItem}>{selectedNavItem.name}</Tooltip>
	{/if}
	<Squircle
		class="bg-thick transparency-reduce:bg-opaque-row"
		cornerRadius={16}
	>
		<div class="flex items-center gap-[2px] px-[5px]">
			<NavItem
				name="My Upwork"
				icon={upworkIcon}
				alt="Upwork icon"
				link="https://www.upwork.com/freelancers/~01a1f59e7a4697be89"
				class="hidden px350:block"
				bind:selectedNavItem
			/>
			<!--  TODO: fix -->
			<!-- <NavItem
				name="My Git server (Forgejo)"
				icon={forgejoIcon}
				alt="Forgejo icon"
				link="{getMainDomainProtocol()}://git.{getMainDomain()}/hloth"
				highlight
				bind:selectedNavItem
			/> -->
			<NavItem
				name="My LinkedIn"
				icon={linkedinIcon}
				alt="Linkedin icon"
				link="https://www.linkedin.com/in/hloth"
				class="hidden px350:block"
				bind:selectedNavItem
			/>
			<NavSeparator class="hidden px400:block" />
			<NavItem
				name="Contact me via Matrix (preferred)"
				icon={elementIcon}
				alt="Element icon"
				link="https://matrix.to/#/@hloth:hloth.dev"
				highlight
				bind:selectedNavItem
			/>
			<NavItem
				name="Contact me via Telegram"
				icon={telegramIcon}
				alt="Telegram icon"
				link="https://t.me/hlothdev"
				class="hidden px300:block"
				bind:selectedNavItem
			/>
			<NavItem
				name="Contact me via Discord"
				icon={discordIcon}
				alt="Discord icon"
				link="https://discord.com/users/329249421332316166"
				class="hidden px600:block"
				bind:selectedNavItem
			/>
			<NavSeparator class="hidden px400:block" />
			<NavItem
				name="Contact me via email"
				icon={mailIcon}
				alt="Email icon"
				link="mailto:hi@hloth.dev"
				bind:selectedNavItem
			/>
			<!--  TODO: fix -->
			<!-- <NavItem
				name="Blog"
				icon={blogIcon}
				alt="My blog icon"
				link={`https://blog.${getMainDomain()}/`}
				class="hidden px450:block"
				bind:selectedNavItem
			/> -->
			<NavItem
				name="Instagram"
				icon={instagramIcon}
				alt="Instagram icon"
				link="https://instagram.com/vityaczech"
				bind:selectedNavItem
			/>
		</div>
	</Squircle>
</nav>
