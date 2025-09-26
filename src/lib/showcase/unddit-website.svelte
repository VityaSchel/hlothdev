<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const undditWebsite: ShowcaseItem = {
		type: "website",
		id: "unddit",
		name: "Unddit",
		description,
		shortDescription:
			"A frontend for Unddit powered by PullPush — view removed Reddit posts and comments, made for freelance client in 2025",
		banner: await getShowcasePicture("unddit", "banner"),
		images: [
			{
				...(await getShowcasePicture("unddit", "screenshot-1")),
				alt: "Unddit website screenshot with text Unddit / display content removed from Reddit; Reddit posts in the r/macOS subreddit: macOS apps can now render 3D scenes directly on Apple Vision Pro, hinting at a tethered headset / In case of emergency, break glass [Riccardo Mori's thoughts on Liquid Glass] / Steve Jobs' famous Stanford speech is 20 years old, and newly remastered / iOS 26 update fixes the most annoying part of sharing on iPhone / Spot Check: Apple and Google Still Have a Chinese VPN Problem / Hot Take and/or Unpopular Opinion - Developer Beta",
			},
			{
				...(await getShowcasePicture("unddit", "screenshot-2")),
				alt: "Unddit website screenshot with removed comments: Please don't. This isn't phishing and when you report it as phishing, it just makes some person's job harder because they have to filter this shit out. Fighting lies with more lies isn't a good look. / But the damage is becoming like a phishing scam, some kid opened a \"bitcoin\" wallet with that chump's site. Then went to a bitcoin ATM to get some coins and send it to his wallet. The coins are officially lost because he was trying to send Bitcoin to Bitcoin Cash wallet. / You can call it a lie. You can call it misleading. You can call it bootleg. But its not phishing. That's like walking by a place called McDowells and getting their fake big Mac and then reporting them for phishing. Also phishing is meant to steal information or scam people of money. If I fuck up and buy bcash instead of bitcoin I can just trade it in at the fair market rate and get my money back. Point is you're wasting someone's time by trying to report to Google. / There are actually plenty of people confusing this for Bitcoin. So it's like mcdowells making their building LOOK like a McDonald's so that anyone who isn't Mcdonalds savy wouldn't be able to tell the difference. Then they sell you a fake Big Mac and you only realize after you bite into it that you were tricked the whole time.",
			},
		],
		links: [
			{
				url: "https://unddit.netlify.app/",
				label: "Visit Unddit (my version at unddit.netlify.app)",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		Reddit is a social media platform where users can share content and engage
		in discussions.
	</p>
	<h2>The problem</h2>
	<p>
		Reddit allows moderators to delete posts and comments. Authors of content
		can also remove their own posts and comments.
	</p>
	<h2>The solution</h2>
	<p>
		Unddit is a web application that allows users to view removed Reddit posts
		and comments. It works by archiving content that has been deleted from
		Reddit, making it accessible to users who want to see the full context of a
		discussion. By using Unddit, users can bypass the limitations of Reddit's
		content moderation and access a more complete history of conversations.
	</p>
	<h2>Remaking unddit</h2>
	<p>
		In early 2025 I got contacted by the original creator of Unddit, who wanted
		to make a new frontend for the service. The original version was built by
		himself using plain HTML, CSS and JavaScript. I was contracted to build a
		modern frontend using Svelte and Tailwind CSS. My project still uses the
		official PullPush API and only replaces the static frontend working
		client-side.
	</p>
	<p>
		In mid 2025 I had to stop working with this client who maintains PullPush
		because of harassment, unethical behavior and significant underpayment. Read
		more on <a href="/showcase/ryo-coin">RYO Coin page</a> in showcase.
	</p>
{/snippet}
