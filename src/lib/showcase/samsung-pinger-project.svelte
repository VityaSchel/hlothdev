<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase";
	import { getShowcasePicture } from "$lib/showcase/picture";

	export const samsungPingerProject: ShowcaseItem = {
		type: "project",
		id: "samsung-pinger",
		name: "Samsung Pinger",
		description,
		shortDescription:
			'MacOS widget with a "Ring my Samsung" button device, written in Swift',
		banner: await getShowcasePicture("samsung-pinger", "banner"),
		images: [
			{
				...(await getShowcasePicture("samsung-pinger", "screenshot")),
				alt: 'Samsung Pinger screenshot demonstrating the "Ring my Samsung" macOS widget in English and Russian languages',
			},
		],
		links: [
			{
				url: "https://git.hloth.dev/hloth/samsung-pinger",
				label: "Open Samsung Pinger source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		Apple «ecosystem» allows you to ring any of your Apple devices from another
		Apple device using the Find My app. It uses Find My network, bluetooth, and
		internet to connect and instantly send a ping to the target device.
	</p>
	<h2>The problem</h2>
	<p>
		Samsung has a similar feature called SmartThings Find, but it only works in
		the browser and requires you to log in to your Samsung account every time
		you want to ring your phone. There is no easy and fast way to ping a Samsung
		phone from a Mac the way it works with Apple devices.
	</p>
	<h2>The solution</h2>
	<p>
		I went to make a native macOS widget with a "Ring my Samsung" button. It
		took me several days to reverse engineer the SmartThings API and learn how
		to make apps in Xcode with Swift. Eventually I was able to make a simple app
		that interacts directly with Samsung APIs to ring my phone even if it's on
		silent mode. As a bonus, I also found a way to customize text in the phone
		alert and change it to anything I want.
	</p>
	<p>
		The app is absolutely free and 100% open source with no ads or trackers.
	</p>
{/snippet}
