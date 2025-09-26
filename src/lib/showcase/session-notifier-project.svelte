<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const sessionNotifierProject: ShowcaseItem = {
		type: "project",
		id: "session-notifier",
		name: "Session Notifier",
		description,
		shortDescription:
			"A REST API for sending Session messages programmatically, made for freelance client in 2024",
		banner: await getShowcasePicture("session-notifier", "banner"),
		images: [
			{
				...(await getShowcasePicture("session-notifier", "screenshot")),
				alt: "Session.email website",
			},
		],
		links: [
			{
				url: "https://web.archive.org/web/20241004205239/https://session.email/",
				label: "Visit session.email archived snapshot",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		Session is a private messenger that uses the decentralized network to
		securely store and route messages.
	</p>
	<h2>Session Notifier</h2>
	<p>
		After building the first Session JavaScript SDK, a person contacted me on
		freelance and requested me to build a REST API that would allow anyone to
		programmatically send messages via clearnet webhooks. The project was called
		Session Notifier and it combined a simple webhook API, a Dockerized Kata
		Containers environment and a monero payment gateway for paid plans. Each
		user could make a free Session account managed by botfather. To prevent spam
		and abuse we also made a reporting system that alerted admins with a
		customer name when their bot was reported by a user. To admin the system I
		built a web admin dashboard with React and Next.js, a special Session admin
		bot and a CLI powered by Bun and TypeScript. I wrote docs using mkdocs and
		documented the REST API using Swagger. The custom payment gateway I built
		from scratch allowed us to poll the Monero blockchain directly and
		distribute the incoming transfers.
	</p>
	<h2>Building a serverless platform for developers</h2>
	<p>
		One of many challenges I faced was to build a powerful and secure platform
		for developers to run JavaScript code in a serverless environment. This
		would allow them to embed any custom logic while saving on infrastructure
		costs.
	</p>
	<h2>Session.email</h2>
	<p>
		Another service we launched was Session.email — a super simple paid tool to
		accept Session messages via email. To use it, you just had to take your
		Session ID and append @session.email to it. To try it out, you could send a
		few test emails from the landing interface, but to use it in production you
		had to pay a small monthly fee. The previously built payment gateway was
		reused for this service as well.
	</p>
{/snippet}
