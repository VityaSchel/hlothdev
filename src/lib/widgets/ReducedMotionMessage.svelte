<script lang="ts">
	import Alert from "$lib/ui/Alert.svelte";

	let {
		visible = $bindable(),
	}: {
		visible: boolean;
	} = $props();
</script>

<div
	class={[
		"hidden max-w-full",
		{
			"motion-reduce:block": visible,
		},
	]}
>
	<Alert
		class="w-[490px]"
		id="reduced-motion"
		srName="Motion reduced"
		{visible}
	>
		You have enabled
		<b class="font-semibold">reduce motion</b>
		setting in your system.
		<br />
		All motion animations will be playing as fade on this page.
		<br />
		In case you’ve enabled it accidentally,
		<a
			href="https://prefers-reduced-motion.com/"
			target="_blank"
			rel="noopener noreferrer nofollow"
			class="font-semibold"
		>
			here’s how to disable it.
		</a>
	</Alert>
</div>
