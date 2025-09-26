<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const x5Websites: ShowcaseItem = {
		type: "website",
		id: "x5-websites",
		name: "X5.io Websites",
		description,
		shortDescription: "",
		banner: await getShowcasePicture("x5-websites", "banner"),
		images: [
			{
				...(await getShowcasePicture("x5-websites", "ketoplan-1")),
				alt: 'Ketoplan website screenshot with a plate of food and a quiz question: "Select protein source"',
			},
			{
				...(await getShowcasePicture("x5-websites", "ketoplan-2")),
				alt: 'Ketoplan website screenshot with text: "Your keto-diet plan is ready"',
			},
			{
				...(await getShowcasePicture("x5-websites", "ketoplan-3")),
				alt: 'Ketoplan website screenshot with text: "Individual diet plan"',
				class: "xl:hidden",
			},
			{
				...(await getShowcasePicture("x5-websites", "mental-health-1")),
				alt: 'Mental health website screenshot with text: "How do you rate your stress level in your everyday life?"',
			},
			{
				...(await getShowcasePicture("x5-websites", "mental-health-2")),
				alt: 'Mental health website screenshot with text: "How do you rate your work-life balance?"',
				class: "xl:hidden",
			},
			{
				...(await getShowcasePicture("x5-websites", "mental-health-3")),
				alt: "Mental health website screenshot with questionnaire results",
				class: "px1180:hidden",
			},
			{
				...(await getShowcasePicture("x5-websites", "bot-biz-landing")),
				alt: "Bot.biz landing made in 2021",
			},
			{
				...(await getShowcasePicture("x5-websites", "bot-biz-frontend")),
				alt: "Bot.biz dashboard frontend",
			},
			{
				...(await getShowcasePicture(
					"x5-websites",
					"bot-biz-admin-dashboard-1",
				)),
				alt: "Bot.biz admin dashboard screenshot with charts",
			},
			{
				...(await getShowcasePicture(
					"x5-websites",
					"bot-biz-admin-dashboard-2",
				)),
				alt: "Bot.biz admin dashboard screenshot with transactions list",
				class: "px1100:hidden",
			},
			{
				...(await getShowcasePicture("x5-websites", "lovebot")),
				alt: 'Lovebot screenshot with text: "Lovebot module: module allows users to search their secret admirers on VK page using page visit data and post reactions"',
			},
			{
				...(await getShowcasePicture("x5-websites", "glassbot")),
				alt: "Glassbot screenshot with landing page for B2B sales",
			},
			{
				...(await getShowcasePicture("x5-websites", "prankbot")),
				alt: 'Prankbot homepage screenshot with text: "Prank your friend with a phone call and get the recording audio"',
			},
			{
				...(await getShowcasePicture("x5-websites", "checkout-dialog")),
				alt: 'Transaction checkout dialog with text "Purchase subscription" / 999 ₽ / Card number / Month and year / CVC / Email / [Checkbox] Foo bar / [Checkbox] Hello world / [Button] Pay 999 ₽',
			},
			{
				...(await getShowcasePicture("x5-websites", "flat-ui-kit")),
				alt: "Flat UI kit demo with buttons, checkboxes, error messages and input fields",
			},
		],
		links: [
			{
				label: "Visit Ketoplan Diet website demo",
				url: "https://x5io-ketoplan.netlify.app/",
			},
			{
				label: "Visit Mental Health Quiz website demo",
				url: "https://x5io-mental-health.netlify.app/",
			},
			{
				label: "Visit Bot.biz Admin Dashboard demo",
				url: "https://x5io-admin-panel.netlify.app/",
			},
			{
				label: "Visit old Bot.biz Admin Dashboard demo",
				url: "https://main--x5io-admin-panel.netlify.app/",
			},
			{
				label: "Visit Lovebot website demo",
				url: "https://x5io-lovebot.netlify.app/",
			},
			{
				label: "Visit Glassbot website demo",
				url: "https://x5io-glassbot.netlify.app/",
			},
			{
				label: "Visit Prankbot website demo",
				url: "https://x5io-prankbot.netlify.app/",
			},
			{
				label: "Visit Checkout Dialog demo",
				url: "https://x5io-coupone.netlify.app/",
			},
			{
				label: "Open Flat UI kit source code",
				url: "https://vityaschel.github.io/checkout-dialog/",
			},
		],
	};
</script>

{#snippet link(label: string, url: string)}
	<a
		class="mt-2 block"
		href={url}
		draggable="false"
		target="_blank"
		rel="noopener noreferrer nofollow"
	>
		{label}
	</a>
{/snippet}
{#snippet description()}
	<p>
		In early 2022 I was contacted by a couple of entrepreneurs who wanted to
		build a B2B platform with multiple SaaS products. The project was called
		bot.biz but later renamed to x5.io. I was hired as the lead frontend
		developer to build the admin dashboard with React and Next.js, integrate
		backend API with GraphQL and create multiple landing pages for the modules.
		I also designed a UI kit that works with React and a checkout dialog
		component for payments integrated with CloudPayments. The project was
		launched in 2023 but due to constant payment delays and abuse I had to find
		a new job. The client never paid me the full amount for my work, saying "You
		think only about money. This will end badly." and silently dropped me in
		late 2024 owing more than 1500€. In 2025, after more than a year of
		unsuccessfull attempts to contact them and get my money, I've decided to
		drop it and published all websites and their source code for free.
	</p>
	<h2>Ketoplan Diet Website</h2>
	<p>
		<a
			href="https://en.wikipedia.org/wiki/Ketogenic_diet"
			rel="noopener noreferrer nofollow"
			target="_blank">Ketogenic diet</a
		>
		is a low-carb, high-fat diet that offers health benefits. The Ketoplan Diet Website
		was a questionnaire designed to create personalized paid keto diet plans for
		users based on their preferences and goals. It consists of a series of questions
		determining the user's dietary needs, followed by a tailored meal plan and recipes.
	</p>
	<p>
		The frontend was built entirely by me using React and Next.js in a couple of
		days. The
		<a
			href="https://git.hloth.dev/hloth/ketoplan-diet/releases"
			rel="noopener noreferrer nofollow"
			target="_blank">backend</a
		> was created by a third-party developer. One of the challenges was to optimize
		the performance of webpage for mobile devices and slow connection. I achieved
		this by using Low Quality Image Placeholders and preloading assets for the next
		quiz step in the background before user reaches it.
	</p>
	{@render link(
		"Visit Ketoplan Diet website demo",
		"https://x5io-ketoplan.netlify.app/",
	)}
	{@render link(
		"Open Ketoplan Diet website source code",
		"https://git.hloth.dev/hloth/ketoplan-diet",
	)}
	{@render link(
		"Open Ketoplan Diet website figma layout",
		"https://www.figma.com/design/5PpemSDWNuK5pVmAmTgHu5/Keto---QUIZ--Copy-?node-id=18-2239&t=vUwyle51HgNv7WEV-1",
	)}
	<h2>Mental Health Quiz Website</h2>
	<p>
		Mental Health Quiz is a web application that provides users with a series of
		questions to assess their mental well-being. The quiz covers various aspects
		of mental health, such as stress levels, work-life balance, and emotional
		state. Based on the user's responses, the application generates a
		personalized report with insights and paid recommendations plan to improve
		their mental health.
	</p>
	<p>
		The frontend was built entirely by me using React and Next.js in about one
		week. The <a
			href="https://git.hloth.dev/hloth/mental-health-quiz/releases"
			rel="noopener noreferrer nofollow"
			target="_blank">backend</a
		> was created by a third-party developer. The project uses a custom-built checkout
		dialog component mentioned below for payments.
	</p>
	{@render link(
		"Visit Mental Health Quiz website demo",
		"https://x5io-mental-health.netlify.app/quiz/1",
	)}
	{@render link(
		"Open Mental Health Quiz website source code",
		"https://git.hloth.dev/hloth/mental-health-quiz/",
	)}
	<h2>Bot.biz landing</h2>
	<p>
		The first project I made for bot.biz/x5.io was a simple landing page in late
		2021. It's a responsive and snappy single-page website built with React,
		Next.js, reveal transitions, custom Material UI components and CSS
		animations. It uses next-i18next for internationalization, redux for state
		management, optimized for five screen breakpoints and Safari. The project
		was made in a couple of days and I received 300€ for it.
	</p>
	{@render link("Visit Bot.biz landing", "https://botbiz-landing.netlify.app/")}
	{@render link(
		"Open Bot.biz landing source code",
		"https://git.hloth.dev/hloth/bot-biz-landing",
	)}
	{@render link(
		"Open Bot.biz landing figma layout",
		"https://www.figma.com/design/rNadvDS5GqqJM2JILd0K8w/X5--Copy-?node-id=549-11479&t=xXUKyNztOrHoBg6n-4",
	)}
	<h2>Bot.biz frontend</h2>
	<p>
		The main dashboard frontend for bot.biz/x5.io was the second project I was
		building with React, Next.js and Material UI. It features responsive charts,
		custom UI kit, dynamic theming, internationalization. Requests are using
		GraphQL and Apollo Client for React with automatic schema generation using
		Swagger.
	</p>
	<p>
		I was leading a team of two frontend developers, mentoring one junior
		developer and doing code reviews. I also implemented OAuth authorization
		with two providers. The project was remade several times.
	</p>
	<p>
		While working on this project I learned basic workflow with Jira and GitLab,
		learned to work with Docker deployments and CI/CD pipelines.
	</p>
	<p>
		I also implemented a frontend for wallet management that was used by
		customers to withdraw their earnings to their online bank accounts. Another
		challenge was to create a custom bulk sending UI with templates, variables
		and conditional formatting for each platform (VK, Telegram, e-mails).
	</p>
	<p>
		While implementing charts I have learned to use D3.js and Recharts
		libraries. I created a custom plugin for Recharts to display gradient areas
		filled according to the Figma design. On top of that, I had to make it
		responsible for viewport size and support dark mode.
	</p>
	{@render link(
		"Open Bot.biz frontend homepage figma layout",
		"https://www.figma.com/design/rNadvDS5GqqJM2JILd0K8w/X5--Copy-?node-id=8584-14648&t=xXUKyNztOrHoBg6n-4",
	)}
	{@render link(
		"Open Bot.biz frontend wallet figma layout",
		"https://www.figma.com/design/rNadvDS5GqqJM2JILd0K8w/X5--Copy-?node-id=5879-33401&t=xXUKyNztOrHoBg6n-4",
	)}
	<h2>Bot.biz Admin Dashboard Website</h2>
	<p>
		The next project was an admin dashboard for bot.biz CEOs and managers to
		keep track of business users, finances and provide support to B2B clients.
		The project was built with React and Next.js, initially using Material UI
		but later replaced with Shadcn/Ui components.
	</p>
	<p>
		The dashboard features statistics with charts, user management with search
		and filters, transaction history.
	</p>
	{@render link(
		"Visit Bot.biz Admin Dashboard demo",
		"https://x5io-admin-panel.netlify.app/",
	)}
	{@render link(
		"Visit old Bot.biz Admin Dashboard demo",
		"https://main--x5io-admin-panel.netlify.app/",
	)}
	{@render link(
		"Open Bot.biz Admin Dashboard source code",
		"https://git.hloth.dev/hloth/bot-biz-admin-panel/",
	)}
	<h2>Lovebot Website</h2>
	<p>
		Lovebot module was one of connectable modules for bot.biz clients to use to
		earn money on their customers using it. It allowed users to search their
		secret admirers on VK page using page visit data and post reactions.
	</p>
	<p>
		The frontend was built by me using React and Next.js in about one week. The
		<a
			href="https://git.hloth.dev/hloth/lovebot/releases"
			rel="noopener noreferrer nofollow"
			target="_blank">backend</a
		> was created by a third-party developer.
	</p>
	{@render link(
		"Visit Lovebot website demo",
		"https://x5io-lovebot.netlify.app/",
	)}
	{@render link(
		"Open Lovebot website source code",
		"https://git.hloth.dev/hloth/lovebot",
	)}
	<h2>Glassbot Website</h2>
	<p>
		Glassbot module was another connectable module for bot.biz clients to use to
		earn money on their customers using it. It achieved similar functionality to
		Lovebot. The client wanted me to copy an existing website made by a
		third-party developer using plain HTML, CSS and JavaScript. I was contracted
		to build an exact replica and then adapt it for the bot.biz backend.
	</p>
	<p>
		The frontend was built by me using React and Next.js in about one week. The
		<a
			href="https://git.hloth.dev/hloth/glassbot/releases"
			rel="noopener noreferrer nofollow"
			target="_blank">backend</a
		> was created by a third-party developer.
	</p>
	{@render link(
		"Visit Glassbot website demo",
		"https://x5io-glassbot.netlify.app/",
	)}
	{@render link(
		"Open Glassbot website source code",
		"https://git.hloth.dev/hloth/glassbot",
	)}
	<h2>Prankbot</h2>
	<p>
		Prankbot was a website designed for people to prank their friends with a
		phone call and get the recording audio. The website featured a grid of prank
		scenarios with descriptions and an example audio recording, categorized
		using tabs and automatically updated from the database using API through
		schema built automatically from Swagger.
	</p>
	<p>
		The website had a plain email/password authentication and a simple profile
		page with history of orders and buttons to download recording.
	</p>
	<p>
		The frontend was built by me using React and Next.js in about four days. The
		<a
			href="https://git.hloth.dev/hloth/prankbot/releases"
			rel="noopener noreferrer nofollow"
			target="_blank">backend</a
		> was created by a third-party developer.
	</p>
	{@render link(
		"Visit Prankbot website demo",
		"https://x5io-prankbot.netlify.app/",
	)}
	{@render link(
		"Open Prankbot website source code",
		"https://git.hloth.dev/hloth/prankbot",
	)}
	{@render link(
		"Open Prankbot website figma layout",
		"https://www.figma.com/design/xLugxePegIHsPaA8zHdzPM/Prank-Site--Copy-?node-id=16-64616&t=tNyMH9DxkwbxnhPN-4",
	)}
	{@render link(
		"Open Prankbot landing figma layout",
		"https://www.figma.com/design/XIo6Pw9tCTDr1d6bmwOusO/Prank-pages--Copy-?node-id=11-813&t=gA1SiKiMegbu4zh5-1",
	)}
	<h2>Checkout Dialog Component</h2>
	<p>
		In order to handle payments for all websites and modules, I was tasked with
		creating a reusable checkout dialog component that would work with
		CloudPayments API. The component had to be flexible enough to accommodate
		different use cases, such as subscriptions, one-time payments, and various
		pricing options. It also had to be easily adaptable to any theme and ensure
		compliance with different legal requirements.
	</p>
	<p>
		I chose React and Next.js for building the component, as they seemed to be
		the most suitable tools for all the websites I have created with Next.js.
		The component exported an API allowing developers to customize color scheme,
		checkboxes, cryptographic signatures for secure CloudPayments
		initialization, and handle success and failure callbacks.
	</p>
	{@render link(
		"Visit Checkout Dialog demo",
		"https://vityaschel.github.io/checkout-dialog",
	)}
	{@render link(
		"Open Checkout Dialog source code",
		"https://git.hloth.dev/hloth/checkout-dialog",
	)}
	{@render link(
		"Open Checkout Dialog figma layout",
		"https://www.figma.com/design/4ODl3bIgtqvS9sQc2toFyQ/Checkout-%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9--Copy-?node-id=1-3&t=6fTUk7jZxej5gbdX-4",
	)}
	<h2>Flat UI Kit</h2>
	<p>
		I exported all the components I have created for bot.biz/x5.io into a
		separate library called Flat UI Kit. This way I could reuse them in all
		projects for bot.biz without copy-pasting and maintaining multiple versions
		of the same code.
	</p>
	{@render link(
		"Open Flat UI kit source code",
		"https://git.hloth.dev/hloth/x5io-flat-ui-kit",
	)}
{/snippet}
