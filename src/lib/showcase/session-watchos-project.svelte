<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const sessionWatchosProject: ShowcaseItem = {
		type: "project",
		id: "session-watchos",
		name: "Session watchOS",
		description,
		shortDescription:
			"An unofficial native Apple Watch watchOS client for Session Messenger",
		banner: await getShowcasePicture("session-watchos", "banner"),
		images: [
			{
				...(await getShowcasePicture("session-watchos", "screenshot-1")),
				alt: "Session Watchos linking website home page screenshot with text: Open Session on your Apple Watch. First Session messenger client that runs on WatchOS. Send and receive messages like in movies. No companion app required, everything runs inside of your watches. Button: Download, Open sources.",
			},
			{
				...(await getShowcasePicture("session-watchos", "screenshot-2")),
				alt: "Session Watchos linking website login page screenshot with text: Log in with existing account. [Input with placeholder: Mnemonic phrase]. \"Continue\" button. — Am I just sending you my mnemonic phrase? Is this secure? — See that tiny # character in your address bar? It's called URL fragment and what follows it - is a decryption key, which was generated along with qr code on your device. When you press Continue, this key is used to encrypt your mnemonic phrase and this gibberish is sent back to your watches where the same key is used to decrypt it. Basically, your browser sends encrypted mnemonic so we can't read it, then your watches turn it back. It's that simple and works on AES-256 symmetric encryption. Your mnemonic phrase never leaves your devices unencrypted.",
			},
			{
				...(await getShowcasePicture("session-watchos", "screenshot-3")),
				alt: "Session Watchos screenshot with main menu",
			},
			{
				...(await getShowcasePicture("session-watchos", "screenshot-4")),
				alt: "Session Watchos screenshot with chats list",
			},
			{
				...(await getShowcasePicture("session-watchos", "screenshot-5")),
				alt: "Session Watchos screenshot with conversation view",
			},
			{
				...(await getShowcasePicture("session-watchos", "screenshot-6")),
				alt: "Session Watchos screenshot with conversation settings view",
			},
		],
		links: [
			{
				url: "https://git.hloth.dev/hloth/session-watchos",
				label: "Open Session Watchos source code",
			},
			{
				url: "https://git.hloth.dev/hloth/session-watchos-website",
				label: "Open Session Watchos linking website source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		As one of my experiments with what you can run on Apple Watches, I decided
		to try to build the first truly independant watchOS client that works
		entirely on the device itself without requiring a companion iPhone app.
	</p>
	<h2>Challenges</h2>
	<p>
		As you might expect, there were a lot of challenges. At the very least, I
		had to reimplement everything from my JavaScript Session SDK in Swift, then
		run cryptographic dependencies such as OpenSSL and port libsession written
		in C++. This was even more difficult because I don't have Apple Watch, so I
		was mostly using an official simulator and once tried running it on my
		boyfriend's real Apple Watch. I also had to invent a way to allow user to
		securely input their private key (mnemonic/passphrase) without sending it in
		plaintext over the internet. I ended up building a small website that
		encrypts it client-side.
	</p>
	<h2>The final result</h2>
	<p>
		The app works and you can even send messages. Polling works poorly and it
		only allows for very basic operations. It also didn't work on real Apple
		Watches so it was more of proof-of-concept than a real app.
	</p>
{/snippet}
