<script lang="ts">
	import { page } from "$app/state";
	import fileIcon from "$lib/assets/file-icon.webp?inline";

	// JS ONLY:
	// There is no way to differentiate between a pressed state and drag in CSS with :active pseudoclass
	let pressed = $state(false);
</script>

<a
	href="https://hloth.dev{page.url.pathname}"
	aria-label="Current page"
	class={[
		`flex w-0 cursor-default overflow-clip transition-[width] duration-300
	group-hover:w-5 focus-visible:w-5`,
		{
			"brightness-[48%]": pressed,
		},
	]}
	onpointerdown={() => (pressed = true)}
	onpointerup={() => (pressed = false)}
	onblur={() => (pressed = false)}
	ondragstart={() => (pressed = false)}
	ondragend={() => (pressed = false)}
	tabindex={-1}
	aria-hidden="true"
>
	<img
		src={fileIcon}
		alt="Steve Job’s quote as a text file icon"
		width="20"
		height="20"
		class="h-[20.5px] object-cover object-right"
	/>
</a>
