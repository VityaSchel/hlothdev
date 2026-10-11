<script lang="ts">
	import "../app.css";
	import "../tailwind.css";
	import "@fontsource-variable/inter";
	import Background from "#lib/widgets/Background.svelte";
	import Nav from "#lib/widgets/Nav.svelte";
	import { onNavigate } from "$app/navigation";
	import JavascriptDisabledMessage from "#lib/widgets/JavascriptDisabledMessage.svelte";
	import ReducedMotionMessage from "#lib/widgets/ReducedMotionMessage.svelte";
	import ReducedTransparencyMessage from "#lib/widgets/ReducedTransparencyMessage.svelte";
	import type { LayoutProps } from "./$types";
	import { browser } from "$app/env";
	import { flushSync, onMount } from "svelte";
	import {
		playWhenSmooth,
		revealSource,
		startMorph,
	} from "#lib/view-transition.svelte.ts";
	import { siteUrl, subdomainUrl } from "#lib/utils.ts";

	let { children, data }: LayoutProps = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		const morph = startMorph(navigation);
		flushSync();

		return new Promise((resolve) => {
			const transition = document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
				morph.enter();
				flushSync();
				revealSource(navigation);
			});
			transition.ready.then(playWhenSmooth, () => {});
			transition.updateCallbackDone.catch(() => {});
			transition.finished.then(morph.end, morph.end);
		});
	});

	const jsDisabledAlertVisible = $derived(!data.alertsDismissed.jsDisabled);
	const reducedMotionAlertVisible = $derived(
		!data.alertsDismissed.reducedMotion,
	);
	const reducedTransparencyAlertVisible = $derived(
		!data.alertsDismissed.reducedTransparency,
	);

	onMount(() => {
		if (window.location.hostname === "localhost") return;
		console.log();
		console.log();
		console.log();
		console.log(
			"%cHello? Hello, hello? Uhh, I wanted to record a message for you... 👀",
			"font-size: 30px; cursor: default; text-align: center; font-family: fantasy, sans-serif, emoji; background: #1f371a; border-radius: 999px; display: inline-block; color: white; padding: 32px 24px 24px 24px; width: 100%;",
		);
		console.log(
			`%cLooking for source code? Here you go:\n${subdomainUrl("git", "/hloth/hloth.dev")}`,
			"font-size: 16px; cursor: default; text-align: right; font-family: sans-serif; background: #3B82F7; border-radius: 999px; display: inline-block; color: white; padding: 32px; float: right",
		);
		console.log(
			`%cWhile you're still here, why don't you take a look at\n${siteUrl("/robots.txt")}?`,
			"font-size: 16px; cursor: default; text-align: left; font-family: sans-serif; background: #07c616; border-radius: 999px; display: inline-block; color: white; padding: 32px; float: left",
		);
		console.log();
		console.log();
		console.log();
	});
</script>

<Background>
	{@render children()}
	<Nav />
	<div
		class={[
			` pointer-events-none fixed right-0 bottom-0 z-[2000] max-w-full flex-col
			items-end gap-4 px-4 pt-5 pb-15 *:pointer-events-auto md:pr-10 `,
			browser || !jsDisabledAlertVisible ? "hidden" : "flex",
			{
				"motion-reduce:flex": reducedMotionAlertVisible,
				"transparency-reduce:flex": reducedTransparencyAlertVisible,
			},
		]}
	>
		<ReducedTransparencyMessage visible={reducedTransparencyAlertVisible} />
		<ReducedMotionMessage visible={reducedMotionAlertVisible} />
		<JavascriptDisabledMessage visible={jsDisabledAlertVisible} />
	</div>
</Background>
