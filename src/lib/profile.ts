export type ProfileHref = string | { subdomain: string; path: string };

export type ProfileLink = {
	label: string;
	title: string;
	href: ProfileHref;
	highlight?: true;
};

export const profile = {
	name: "Viktor Shchelochkov",
	role: "Senior Full Stack Web Developer",
	location: "Madrid, Spain",
	birthday: { year: 2005, month: 7, day: 6, utcOffsetHours: 4 },
	summary:
		"Hi, I’m Viktor Shchelochkov — Full Stack Web Developer and open-source enthusiast. I build applications and websites in Svelte, React, Next.js, and Swift.",
	about: {
		title: "„Think different“",
		subtitle: "is my life slogan",
		paragraphs: [
			"Thinking different was a choice I made early in life. As a kid, I often felt two steps ahead of my classmates — and out of place because of it. While others followed the curriculum, I was tinkering with computers, building my first website at 9 and discovering my first security vulnerability in my school’s IT system by 15. Instead of curiosity, I was met with suspicion.",
			"At school IT competitions, most participants showcased recycled ideas — generic research, overused robots, or well-known solutions for unneeded problems. I think different, so I always focused on creativity, innovation, and real-world usefulness, surprising juries with modern technologies outstanding from what they're used to.",
			"At home, it wasn’t much different. My parents didn’t see value in my path and pressured me to study. By 17, I moved into my own apartment to create space for the future I believed in. People, whose whole goal in life is to serve the country and have two kids, think that a progressive young boy announcing he’s moving to Europe with his boyfriend is crazy. But I think different.",
		],
	},
	links: {
		upwork: {
			label: "Upwork",
			title: "My Upwork",
			href: "https://www.upwork.com/freelancers/~01a1f59e7a4697be89",
		},
		forgejo: {
			label: "Forgejo",
			title: "My Git server (Forgejo)",
			href: { subdomain: "git", path: "/hloth" },
			highlight: true,
		},
		linkedin: {
			label: "LinkedIn",
			title: "My LinkedIn",
			href: "https://www.linkedin.com/in/hloth",
		},
		matrix: {
			label: "Matrix",
			title: "Contact me via Matrix (preferred)",
			href: "https://matrix.to/#/@hloth:hloth.dev",
			highlight: true,
		},
		telegram: {
			label: "Telegram",
			title: "Contact me via Telegram",
			href: "https://t.me/hlothdev",
		},
		discord: {
			label: "Discord",
			title: "Contact me via Discord",
			href: "https://discord.com/users/329249421332316166",
		},
		email: {
			label: "Email",
			title: "Contact me via email",
			href: "mailto:hi@hloth.dev",
		},
		blog: {
			label: "Blog",
			title: "Blog",
			href: { subdomain: "blog", path: "/" },
		},
		instagram: {
			label: "Instagram",
			title: "Instagram",
			href: "https://instagram.com/hlothdev",
		},
	} satisfies Record<string, ProfileLink>,
} as const;

export const resolveHref = (
	href: ProfileHref,
	subdomainUrl: (subdomain: string, path: string) => string,
) =>
	typeof href === "string" ? href : subdomainUrl(href.subdomain, href.path);
