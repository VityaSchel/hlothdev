<script lang="ts">
	import KeyboardNavigationSkipLink from "#lib/features/KeyboardNavigationSkipLink.svelte";

	let {
		id,
		name,
		children,
		childrenCount,
		skip,
	}: {
		id?: string;
		name: string;
		children: import("svelte").Snippet;
		childrenCount: number;
		skip?: { label: string; id: string };
	} = $props();

	const uid = $props.id();
	let scrollX = $state(0);
</script>

<section
	class="checkbox-content flex flex-col gap-4 px470:gap-[8px]"
	{id}
	aria-label="Section {name} of showcase"
>
	<div class="flex items-end justify-between px-4 px470:px-8">
		<h2
			id="section-heading-{uid}"
			class="font-display text-base leading-[19px] font-semibold
				tracking-[-0.2px] select-none"
		>
			{name}
		</h2>
		{#if skip}
			<KeyboardNavigationSkipLink class="mr-auto" id={skip.id}>
				{skip.label}
			</KeyboardNavigationSkipLink>
		{/if}
		<input
			type="checkbox"
			class="checkbox pointer-events-none absolute opacity-0"
			tabindex="0"
			autocomplete="off"
			id="checkbox-{uid}"
			aria-labelledby="toggle-label-{uid} section-heading-{uid}"
			onchange={() => {
				scrollX = 0;
			}}
		/>
		<label
			id="toggle-label-{uid}"
			for="checkbox-{uid}"
			class="checkbox-label font-display text-sm font-medium tracking-[-0.2px]
				text-thin-typography select-none hover:underline"
		>
			<span class="show-less">Show Less</span>
			<span class="show-all">
				Show All ({childrenCount})
			</span>
		</label>
	</div>
	<div
		class={[
			` nowrap-flex wrap-styles scrollbar-thin gap-[10px] overflow-scroll px-4
			pt-[0.5px] pb-3 focus-scrollable px470:px-8 `,
			{
				"nowrap-fade-out-mask": scrollX === 0,
			},
		]}
		aria-label="Section {name} of showcase, containing {childrenCount} items"
		onscroll={(e) => (scrollX = e.currentTarget.scrollLeft)}
		onfocusin={({ target }) => {
			if (target instanceof HTMLElement && target.matches(":focus-visible"))
				target.scrollIntoView({ block: "nearest", inline: "nearest" });
		}}
	>
		{@render children()}
	</div>
</section>

<style>
	.checkbox-content :global(.banner) {
		height: 115px;
	}
	.checkbox-content:has(.checkbox:not(:checked)) {
		.show-less {
			display: none;
		}
		.nowrap-fade-out-mask {
			mask: linear-gradient(to right, black 0%, black 90%, transparent 100%);
			mask-size: 200% 100%;
			transition: mask-position 0.5s ease-in-out;

			&:not(:hover, :focus-within) {
				mask-position: 100% 0%;
			}
			&:hover,
			&:focus-within {
				mask-position: 20% 0%;
			}
		}
		.nowrap-flex {
			display: flex;
		}
	}
	.checkbox-content:has(.checkbox:focus-visible) .checkbox-label {
		text-decoration: underline;
		color: #fff;
	}
	.checkbox-content:has(.checkbox:checked) {
		.show-all {
			display: none;
		}
		.wrap-styles {
			/* grid grid-cols-1 px450:grid-cols-2 px600:grid-cols-3 md:flex md:flex-wrap */
			display: grid;
			grid-template-columns: repeat(1, minmax(0, 1fr));

			@media screen and (min-width: 450px) {
				grid-template-columns: repeat(2, minmax(0, 1fr));
			}

			@media screen and (min-width: 600px) {
				grid-template-columns: repeat(3, minmax(0, 1fr));
			}

			@media screen and (min-width: 768px) {
				display: flex;
				flex-wrap: wrap;
			}
		}

		@media screen and not (min-width: 768px) {
			:global(.banner) {
				height: fit-content;
			}
		}
	}
</style>
