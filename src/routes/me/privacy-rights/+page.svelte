<script lang="ts">
	import "@fontsource-variable/sofia-sans-condensed";
	import PrivacyRightsCard from "../PrivacyRightsCard.svelte";
	import PrivacyRelatedProjectCard from "./PrivacyRelatedProjectCard.svelte";
	import PrivateContactMethod from "./PrivateContactMethod.svelte";
	import PageMetadata from "$lib/widgets/PageMetadata.svelte";
</script>

<PageMetadata
	name="How I support digital privacy rights"
	description="Privacy Is A Human Right. I’m committed to make privacy not just a feature, but a foundation. I build for people who understand it’s a right worth fighting for."
/>
<PrivacyRightsCard>
	<div
		class="content-container relative z-[1] h-full gap-8 overflow-auto
			rounded-[13px] p-8 px680:flex px680:gap-4 lg:gap-8"
		style="view-transition-name: privacy-rights-content;"
	>
		<div
			class="mb-8 flex min-w-0 flex-1 flex-col justify-between gap-2 px680:mb-0
				lg:w-auto lg:min-w-auto lg:flex-auto"
		>
			<nav
				class="top-0 left-0 z-[1] flex shrink-0 items-center gap-8 px680:sticky"
			>
				<a
					href="/me"
					aria-label="Go back to the /me page"
					class="flex w-fit cursor-default overflow-clip rounded-full
						text-white/60 focus-lg-dark active:text-neutral-300/80"
					draggable="false"
				>
					<svg
						width="36"
						height="37"
						viewBox="0 0 36 37"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect y="0.5" width="36" height="36" rx="18" fill="currentColor" />
						<path
							d="M24.25 12.25L11.75 24.75M11.75 12.25L24.25 24.75"
							stroke="#161616"
							stroke-opacity="0.8"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
				<span class="text-sm tracking-[-0.03px] text-[#4D4D4D] lg:text-base">
					Photo by <a
						href="https://unsplash.com/@srhhrbch"
						class="font-medium"
						target="_blank"
						rel="nofollow noreferrer noopener"
					>
						Siarhei Horbach
					</a>
				</span>
			</nav>
			<div class="mask-t-from-95% pt-3 focus-scrollable px680:overflow-auto">
				<div
					class="content flex max-w-full flex-col font-compact-display
						leading-[19px] font-medium lg:w-[400px] px1150:w-[500px]
						px1300:w-[550px] px1380:w-[610px]"
				>
					<h1
						class="mb-2 font-extra-condensed text-4xl font-extrabold uppercase
							px1380:text-5xl"
					>
						Privacy Is A Human Right
					</h1>
					<h2
						class="mb-4 w-[280px] max-w-full font-condensed text-xl leading-6
							font-bold px1380:w-max px1380:text-2xl"
					>
						I’m committed to make privacy not just a feature, but a foundation.
					</h2>
					<p>
						To me, privacy is a fundamental human right — non-negotiable, deeply
						personal, and essential for freedom and dignity in the digital age.
						I deeply believe that people deserve control over their data, their
						conversations, and their identities.
					</p>
					<p>
						I contribute to a privacy-focused, end-to-end encrypted Session
						messenger that keeps communication secure and people connected using
						decentralized network. All my open source projects reflect the same
						philosophy.
					</p>
					<p class="break-words">
						Trusting your data to cloud means trusting whoever hosts it. I
						prefer self-hosting on infrastructure that I can control. Same
						mindset shapes my approach to web: I make websites that respect
						visitors decision to enable JavaScript, design them with privacy in
						mind and host some of them in the Tor onion network under the <a
							href="http://hlothdevzkti6suoksy7lcy7hmpxnr3msu5waokzaslsi2mnx5ouu4qd.onion/me"
							rel="nofollow noreferrer noopener"
							class="font-semibold break-all"
							>hlothdevzkti6suoksy7lcy7hmpxnr3msu5waokzaslsi2mnx5ouu4qd.onion</a
						> domain.</p
					>
					<p>
						I build for people who care about their digital lives, who
						understand that privacy isn’t a trend.
						<br />
						It’s a right worth fighting for.
					</p>
				</div>
			</div>
		</div>
		<div
			class="flex w-auto max-w-full min-w-0 flex-1 flex-col gap-[15px]
				focus-scrollable px680:overflow-auto px680:pl-4 lg:w-[540px]
				lg:min-w-auto lg:flex-auto"
			role="complementary"
		>
			{#snippet heading(text: string)}
				<h2
					class="
            text-center text-lg leading-5 font-semibold tracking-[-0.0075em]
            px1300:text-xl
          "
				>
					{text}
				</h2>
			{/snippet}
			{@render heading(
				"My contributions to E2EE decentralized Session Messenger",
			)}
			<div class="mb-2 flex shrink-0 flex-col items-center gap-2">
				<div class="grid w-full shrink-0 grid-cols-1 gap-2 lg:grid-cols-2">
					<PrivacyRelatedProjectCard
						icon="/projects/session-native/logo-square-xs.webp"
						link="https://git.hloth.dev/hloth/session-native"
						name="Session Native"
						caption="Native Session macOS client written in Swift"
					/>
					<PrivacyRelatedProjectCard
						icon="/projects/session.js/logo-square-xs.webp"
						link="https://sessionjs.github.io/docs/"
						name="Session.js"
						caption="The first bot framework for Session built with Bun"
					/>
					<PrivacyRelatedProjectCard
						icon="/projects/ons-registry/logo-square-xs.webp"
						link="https://ons.session.community/"
						name="ONS Registry"
						caption="Blockchain data exploring tool & registry"
					/>
					<PrivacyRelatedProjectCard
						icon="/projects/session-web/logo-square-xs.webp"
						link="https://git.hloth.dev/hloth/session-web"
						name="Session Web"
						caption="Session client running in a web browser"
					/>
					<PrivacyRelatedProjectCard
						icon="/projects/session-vanity-id-generator/logo-square-xs.webp"
						link="https://session-id.pages.dev/"
						name="Vanity ID Generator"
						caption="Client-side tool generating vanity Session account IDs"
					/>
					<PrivacyRelatedProjectCard
						icon="/projects/session-bots-directory/logo-square-xs.webp"
						link="https://bots.session.community/"
						name="Bots Directory"
						caption="Directory of Session bots, built with Remix"
					/>
				</div>
				<a
					href="https://session.community/"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full border border-[#bbbbbf] bg-white px-4 py-1
						font-medium tracking-tight focus-sm-dark"
				>
					View more
				</a>
			</div>
			{@render heading("Ways to contact me securely")}
			<div class="grid grid-cols-2 gap-2 lg:flex lg:justify-center">
				<PrivateContactMethod
					link="https://matrix.to/#/@hloth:hloth.dev"
					name="Matrix"
					preferred
				>
					{#snippet icon()}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE -->
							<path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 3H3v18h1m16 0h1V3h-1M7 9v6m5 0v-3.5a2.5 2.5 0 1 0-5 0v.5m10 3v-3.5a2.5 2.5 0 1 0-5 0v.5"
							/>
						</svg>
					{/snippet}
				</PrivateContactMethod>
				<PrivateContactMethod
					link="https://id.session.community/#057aeb66e45660c3bdfb7c62706f6440226af43ec13f3b6f899c1dd4db1b8fce5b"
					name="Session"
				>
					{#snippet icon()}
						<svg
							viewBox="0 0 40 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M30.5139 0L30.9954 0.0146484C32.1168 0.080743 33.2161 0.366965 34.2298 0.858398C35.3881 1.41997 36.4053 2.23565 37.2053 3.24414C38.0052 4.2525 38.5676 5.42809 38.8509 6.68359C39.0987 7.78222 39.1274 8.91759 38.9368 10.0244L38.8421 10.4971C38.8398 10.507 38.8367 10.5175 38.8343 10.5273C38.3544 12.4289 37.2455 14.1123 35.6878 15.3037C34.1367 16.4899 32.2315 17.1178 30.2796 17.0889L21.5003 17.0898V26.4102C21.5002 26.9548 21.2049 27.4571 20.7288 27.7217C20.2525 27.9862 19.6698 27.9715 19.2073 27.6836L6.01785 19.4736C4.48856 18.5294 3.22525 17.2099 2.3489 15.6406C1.4716 14.0696 1.01076 12.3003 1.01004 10.501C1.01004 7.7162 2.1161 5.04433 4.08523 3.0752C6.05436 1.10606 8.72526 0 11.51 0H30.5139ZM11.138 3.00879C9.2843 3.10078 7.52491 3.87771 6.20633 5.19629C4.7998 6.60281 4.01004 8.51088 4.01004 10.5C4.01059 11.7875 4.34032 13.0536 4.96804 14.1777C5.55662 15.2317 6.38904 16.1281 7.39383 16.793L7.59695 16.9229L7.60281 16.9268L18.5003 23.71V15.5898C18.5004 14.7615 19.1719 14.0898 20.0003 14.0898H30.5471C31.7467 14.0606 32.9091 13.6523 33.8655 12.9209C34.8788 12.1459 35.6008 11.0525 35.9182 9.81738C36.1053 9.00367 36.1079 8.15826 35.9241 7.34375C35.7399 6.52778 35.3746 5.76374 34.8548 5.1084C34.3348 4.45294 33.674 3.9226 32.9212 3.55762C32.2626 3.23832 31.5482 3.05281 30.8196 3.00977L30.5061 3H11.51L11.138 3.00879Z"
								fill="currentColor"
							/>
							<path
								d="M35.9858 31.2589C35.9468 30.0548 35.6202 28.8763 35.0317 27.8224C34.4038 26.6981 33.4989 25.7522 32.4028 25.0763L32.3969 25.0734L21.5004 18.2902L21.5003 26.4102C21.5001 27.2383 20.8286 27.9101 20.0004 27.9103H9.72017C9.71124 27.9103 9.70176 27.9095 9.69283 27.9093C8.40894 27.8865 7.15522 28.2992 6.13521 29.0793C5.11791 29.8573 4.39219 30.9554 4.07662 32.1964C3.89286 33.0056 3.89304 33.8458 4.07564 34.6554C4.25977 35.4715 4.62504 36.2363 5.14497 36.8918C5.66496 37.5472 6.32668 38.0776 7.07955 38.4425C7.83213 38.8073 8.65729 38.9979 9.49361 39.0002H28.4897L28.8588 38.9914C29.7177 38.9491 30.5637 38.7586 31.3598 38.4289C32.2698 38.052 33.097 37.4993 33.7934 36.8029C34.4897 36.1065 35.0425 35.2801 35.4194 34.3703C35.7963 33.4604 35.9897 32.485 35.9897 31.5002L35.9858 31.2589ZM38.977 32.0168C38.9178 33.2189 38.6524 34.4033 38.1909 35.5177C37.6632 36.7917 36.8895 37.9499 35.9145 38.925C34.9396 39.8998 33.782 40.6727 32.5083 41.2004C31.3936 41.6621 30.2088 41.9283 29.0063 41.9875L28.4897 42.0002H9.4858C8.19857 41.9967 6.92827 41.7033 5.76997 41.1418C4.61175 40.5802 3.59535 39.7644 2.79537 38.756C1.99539 37.7476 1.43222 36.5722 1.14888 35.3166C0.86559 34.0609 0.869219 32.7573 1.15865 31.5031L1.16548 31.4728L1.26314 31.1193C1.78603 29.3629 2.85229 27.8135 4.31294 26.6964C5.86385 25.5104 7.76845 24.8814 9.72017 24.9103H18.5004L18.5003 15.5898L18.5141 15.3879C18.5772 14.9233 18.8553 14.5099 19.2719 14.2785C19.7481 14.0141 20.33 14.0288 20.7924 14.3166L33.9829 22.5265C35.5124 23.4708 36.7744 24.7901 37.6508 26.3595C38.5282 27.9306 38.989 29.6998 38.9897 31.4992L38.977 32.0168Z"
								fill="currentColor"
							/>
						</svg>
					{/snippet}
				</PrivateContactMethod>
				<PrivateContactMethod link="mailto:hi@hloth.dev" name="Email">
					{#snippet icon()}
						<svg
							viewBox="0 0 22 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.805 0.98 20.0007 1.45067 20 2V5.975H18V4L10 9L2 4V14H14V16H2ZM10 7L18 2H2L10 7ZM17 16C16.7167 16 16.4793 15.904 16.288 15.712C16.0967 15.52 16.0007 15.2827 16 15V12C16 11.7167 16.096 11.4793 16.288 11.288C16.48 11.0967 16.7173 11.0007 17 11V10C17 9.45 17.196 8.97933 17.588 8.588C17.98 8.19667 18.4507 8.00067 19 8C19.5493 7.99933 20.0203 8.19533 20.413 8.588C20.8057 8.98067 21.0013 9.45133 21 10V11C21.2833 11 21.521 11.096 21.713 11.288C21.905 11.48 22.0007 11.7173 22 12V15C22 15.2833 21.904 15.521 21.712 15.713C21.52 15.905 21.2827 16.0007 21 16H17ZM18 11H20V10C20 9.71667 19.904 9.47933 19.712 9.288C19.52 9.09667 19.2827 9.00067 19 9C18.7173 8.99933 18.48 9.09533 18.288 9.288C18.096 9.48067 18 9.718 18 10V11Z"
								fill="black"
							/>
						</svg>
					{/snippet}
				</PrivateContactMethod>
				<PrivateContactMethod link="https://hloth.dev/pgp" name="My PGP key">
					{#snippet icon()}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
							<!-- Icon from Streamline by Streamline - https://creativecommons.org/licenses/by/4.0/ -->
							<g
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									d="M11 5.5H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-.5 0V4a3.5 3.5 0 1 0-7 0v1.5"
								/>
								<path d="M7 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" />
							</g>
						</svg>
					{/snippet}
				</PrivateContactMethod>
			</div>
		</div>
	</div>
</PrivacyRightsCard>

<style lang="scss">
	@use "sass:math";

	.content-container {
		background-image: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.7) 45%,
			rgba(255, 255, 255, 0)
		);

		@media (min-width: 680px) {
			background-image: linear-gradient(
				to right,
				rgba(255, 255, 255, 0.7),
				rgba(255, 255, 255, 0.7) 45%,
				rgba(255, 255, 255, 0) 55%,
				rgba(255, 255, 255, 0) 100%
			);
		}

		@media (min-width: 1024px) {
			$radius: 610px + 32px;
			background-image: radial-gradient(
				circle farthest-side at bottom left,
				rgba(255, 255, 255, 1),
				rgba(255, 255, 255, 0.5) calc($radius * 0.66),
				rgba(255, 255, 255, 0) $radius
			);
		}

		.content {
			p {
				letter-spacing: -0.03em;
				font-weight: 500;

				& + p {
					margin-top: 16px;
				}
			}
		}
	}
</style>
