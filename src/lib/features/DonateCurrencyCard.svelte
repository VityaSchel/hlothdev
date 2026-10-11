<script lang="ts">
	import LedgerLiveIcon from "#lib/icons/LedgerLiveIcon.svelte";
	import MetaMaskIcon from "#lib/icons/MetaMaskIcon.svelte";
	import TrustWalletIcon from "#lib/icons/TrustWalletIcon.svelte";
	import SquircleThick from "#lib/SquircleThick.svelte";
	import SvgFallback from "#lib/entities/SvgFallback.svelte";
	import type { ClickToPay } from "../../routes/donate/consts";

	const wallets: {
		key: keyof ClickToPay;
		label: string;
		Icon: import("svelte").Component;
	}[] = [
		{ key: "trustWallet", label: "Trust Wallet", Icon: TrustWalletIcon },
		{ key: "metaMask", label: "MetaMask", Icon: MetaMaskIcon },
		{ key: "ledgerLive", label: "Ledger Live", Icon: LedgerLiveIcon },
	];

	let {
		preferred,
		name,
		address,
		coins,
		clickToPay,
		subtitle,
	}: {
		preferred?: boolean;
		coins: { Icon: import("svelte").Component; rendered: SvgRenderResult }[];
		name: string;
		address: string;
		clickToPay?: ClickToPay;
		subtitle?: string;
	} = $props();

	const uid = $props.id();

	let addressHeight: number = $state(0);
	let collapseAddress = $state(true);
</script>

<SquircleThick
	class="bg-[#242424]/40 transparency-reduce:bg-black/25"
	translucent
>
	<div
		class="group flex h-63.25 shrink-0 flex-col rounded-[30px] p-6 px470:p-8
			px630:h-71.25 px680:h-68.75 md:h-63.25 px870:h-full px870:shrink
			no-hover:h-full! no-hover:justify-between no-hover:gap-4"
	>
		<div
			class="coins min-h-0 flex-1 overflow-clip select-none no-hover:flex-none!"
		>
			<div class="flex h-17 select-none">
				{#each coins as { Icon, rendered } (Icon)}
					<div class="h-full w-[52px] overflow-visible select-none">
						<SvgFallback {...rendered}>
							<Icon />
						</SvgFallback>
					</div>
				{/each}
			</div>
		</div>
		<div class="shrink-0 overflow-clip" aria-label="Crypto wallet details">
			{#if preferred}
				<span
					class="text-[23px] leading-7 font-medium tracking-[-0.5px]
						text-white/60 uppercase px870:text-sm px870:leading-4 px980:text-lg
						px980:leading-8 px1100:text-[23px] px1100:leading-7"
				>
					Preferred
				</span>
			{/if}
			<div class="flex items-center px680:h-10 px870:h-auto px980:h-11.5">
				<h2
					class="h-full text-2xl font-bold text-white px680:text-[32px]
						px870:text-3xl px1100:text-[35.5px]"
					id="wallet-name-{uid}"
				>
					{name}
				</h2>
			</div>
			<div class="flex w-full items-end pt-1.5">
				<div
					class="relative h-5.25 w-full overflow-hidden font-mono text-sm
						leading-5 font-semibold tracking-[-0.2px] break-all text-ellipsis
						text-white/60 transition-[height] duration-300
						group-focus-within:h-(--address-height)
						group-hover:h-(--address-height) focus:outline-0
						motion-reduce:duration-0 px420:text-[17px] px420:leading-6
						px870:text-sm px870:leading-5 px1100:text-[17px] px1380:leading-6
						no-hover:h-(--address-height)"
					style:--address-height={addressHeight ? `${addressHeight}px` : "auto"}
					ontransitionstart={() => (collapseAddress = false)}
					ontransitionend={() => (collapseAddress = true)}
					aria-label="Donation crypto wallet address"
				>
					<span
						class={{
							[`select-all not-group-hover:whitespace-nowrap
							group-focus-within:whitespace-normal! focus:outline-0
							focus-visible:bg-stone-500/50 focus-visible:outline-0
							no-hover:whitespace-normal!`]: collapseAddress,
						}}
						role="textbox"
						tabindex="0"
						onfocus={(e) => getSelection()?.selectAllChildren(e.currentTarget)}
						aria-readonly="true"
						aria-labelledby="wallet-name-{uid}"
					>
						{address}
					</span>
					<span
						class="pointer-events-none absolute top-0 left-0 w-full opacity-0
							select-none focus:outline-0"
						bind:offsetHeight={addressHeight}
						aria-hidden="true"
						tabindex="-1"
					>
						{address}
					</span>
				</div>
			</div>
			{#if clickToPay || subtitle}
				<div
					class={[
						` h-0 shrink-0 overflow-clip duration-300
						group-focus-within:h-(--open-height) group-hover:h-(--open-height)
						motion-safe:transition-[height] motion-reduce:duration-0
						px980:group-focus-within:h-(--open-height-sm)
						px980:group-hover:h-(--open-height-sm) no-hover:h-(--open-height)
						px980:no-hover:h-(--open-height-sm) `,
						{
							"hidden px320:block": clickToPay && !subtitle,
						},
					]}
					style:--open-height="{clickToPay ? 47 : 20}px"
					style:--open-height-sm="{clickToPay ? 58 : 20}px"
				>
					{#if clickToPay}
						<div class="flex shrink-0 items-center pt-4">
							{#each wallets as { key, label, Icon } (key)}
								{#if clickToPay[key]}
									<a
										href={clickToPay[key]}
										class="safari-fix-svgs-please flex h-7.25 w-auto px-2
											focus:bg-stone-500/50 focus:outline-0 px980:h-10"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Open {label}"
									>
										<Icon />
									</a>
								{/if}
							{/each}
						</div>
					{/if}
					{#if subtitle}
						<div
							class="mt-1 text-sm leading-5 font-medium text-white/60
								px980:text-[17px] px980:leading-6"
						>
							{subtitle}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</SquircleThick>

<style>
	@media (hover: hover) {
		.coins {
			mask-image: linear-gradient(
				to bottom,
				black 0%,
				black calc(100% - 20px),
				transparent 100%
			);
		}
	}
	.safari-fix-svgs-please :global(svg) {
		height: 100%;
	}
</style>
