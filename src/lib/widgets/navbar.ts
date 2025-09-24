export async function getIcon(name: string) {
	const icon = await import(`$lib/assets/dock-icons/${name}.webp?inline`).then(
		(m) => m.default as string,
	);
	return {
		icon,
	};
}

type NavItem =
	| {
			id: string;
			name: string;
			alt: string;
			link: string;
			class?: string;
			highlight?: boolean;
			icon: string;
	  }
	| { id: string; separator: true; class?: string };

export const navItems: NavItem[] = [
	{
		id: "upwork",
		name: "My Upwork",
		alt: "Upwork icon",
		link: "https://www.upwork.com/freelancers/~01a1f59e7a4697be89",
		class: "hidden px500:block",
		highlight: true,
		...(await getIcon("upwork")),
	},
	{
		id: "forgejo",
		name: "My Git server (Forgejo)",
		alt: "Forgejo icon",
		link: "https://git.hloth.dev/hloth/",
		highlight: true,
		...(await getIcon("forgejo")),
	},
	{
		id: "linkedin",
		name: "My LinkedIn",
		alt: "Linkedin icon",
		link: "https://www.linkedin.com/in/hloth",
		class: "hidden px350:block",
		...(await getIcon("linkedin")),
	},
	{ id: "separator-1", separator: true, class: "hidden px400:block" },
	{
		id: "element",
		name: "Contact me via Matrix (preferred)",
		alt: "Element icon",
		link: "https://matrix.to/#/@hloth:hloth.dev",
		highlight: true,
		...(await getIcon("element")),
	},
	{
		id: "telegram",
		name: "Contact me via Telegram",
		alt: "Telegram icon",
		link: "https://t.me/hlothdev",
		class: "hidden px300:block",
		...(await getIcon("telegram")),
	},
	{
		id: "discord",
		name: "Contact me via Discord",
		alt: "Discord icon",
		link: "https://discord.com/users/329249421332316166",
		class: "hidden px600:block",
		...(await getIcon("discord")),
	},
	{ id: "separator-2", separator: true, class: "hidden px400:block" },
	{
		id: "mail",
		name: "Contact me via email",
		alt: "Email icon",
		link: "mailto:hi@hloth.dev",
		...(await getIcon("mail")),
	},
	{
		id: "blog",
		name: "My blog",
		alt: "My blog icon",
		link: "https://blog.hloth.dev/",
		class: "hidden px450:block",
		...(await getIcon("blog")),
	},
	{
		id: "instagram",
		name: "My Instagram",
		alt: "Instagram icon",
		link: "https://instagram.com/vityaczech",
		...(await getIcon("instagram")),
	},
];
