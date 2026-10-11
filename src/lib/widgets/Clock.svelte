<script lang="ts">
	const hours = 12;
	const minutesBlock = 5;
	const minuteRotation = 360 / (hours * minutesBlock);
	const hourRotation = 360 / hours;
	const secondRotation = minuteRotation;

	let {
		utcOffsetHours,
		utcOffsetMinutes,
		timezone,
	}: {
		utcOffsetHours: number;
		utcOffsetMinutes: number;
		timezone: string;
	} = $props();

	const now = new Date();
	const time = $derived.by(() => {
		const minutes = now.getUTCMinutes() + utcOffsetMinutes;
		const seconds = now.getUTCSeconds();
		return {
			hours: now.getUTCHours() + utcOffsetHours + minutes / 60,
			minutes: minutes + seconds / 60,
			seconds: seconds + now.getUTCMilliseconds() / 1000,
		};
	});
</script>

<div
	class="@container size-full cursor-default rounded-full bg-white p-[2.1%]
		text-[#1c1c1e] forced-color-adjust-none select-none"
>
	<div class="relative size-full">
		{#each { length: hours }, i}
			<div
				class="border-aligned-element hour"
				style="--rotate: {(i + 1) * hourRotation}deg;"
			>
				<span style="transform: rotate({-(i + 1) * hourRotation}deg);">
					{i + 1}
				</span>
			</div>
		{/each}
		<div
			class="center-aligned-element arrow rotate-43200sec h-[27.73%] w-[4.2%]"
			style="--initial-rotation: {hourRotation * (time.hours % 12)}deg;"
		>
			<span class="bottom-[24%] h-[78%] w-full"></span>
			<span class="bottom-0 h-[36.36%] w-[40%]"></span>
		</div>
		<div
			class="center-aligned-element arrow rotate-3600sec h-[46.21%] w-[4.2%]"
			style="--initial-rotation: {minuteRotation * time.minutes}deg;"
		>
			<span class="bottom-[14.54%] h-[90%] w-full"></span>
			<span class="bottom-0 h-[21.81%] w-[40%]"></span>
		</div>
		<div
			class="center-aligned-element arrow seconds rotate-60sec h-[49%] w-[1%]"
			style="--initial-rotation: {secondRotation * time.seconds}deg;"
		>
			<span class="bottom-0 size-full"></span>
			<span class="top-full h-[14%] w-full"></span>
		</div>
		{#each { length: hours * minutesBlock }, i}
			<div
				class="border-aligned-element tick"
				style="--rotate: {i * minuteRotation}deg;"
			>
				<span></span>
			</div>
		{/each}
		<div class="dot size-[5.88%] bg-[#1c1c1e]"></div>
		<div class="dot size-[3.36%] bg-[#ff9500]"></div>
		<div class="dot top size-[1.68%] bg-white"></div>
		<span
			class="text-outline absolute top-2/3 left-1/2 z-[10] -translate-x-1/2
				-translate-y-1/2 cursor-auto text-[8.8cqw] font-semibold text-white
				mix-blend-difference select-auto"
		>
			{timezone}
		</span>
	</div>
</div>

<style>
	.center-aligned-element {
		position: absolute;
		bottom: 50%;
		left: 50%;
		z-index: 1;
		display: flex;
		transform-origin: bottom;
		transform: translate(-50%, 0%) rotate(var(--rotate));
		align-items: flex-end;
		justify-content: center;
	}

	.border-aligned-element {
		position: absolute;
		top: 0;
		left: 50%;
		display: flex;
		height: 50%;
		transform-origin: bottom;
		transform: translateX(-50%) rotate(var(--rotate));
		align-items: flex-start;
		justify-content: center;
	}

	.arrow {
		span {
			background-color: #1c1c1e;
			border-radius: calc(infinity * 1px);
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.arrow.seconds {
		z-index: 3;

		span {
			background-color: #ff9500;
		}
	}

	.tick {
		width: calc(1.5 / 114 * 100%);

		span {
			height: calc(4.5 / (114 / 2) * 100%);
			width: 100%;
			border-radius: calc(infinity * 1px);
			background: #b0b0b0;
		}

		&:nth-child(5n + 1 of .tick) span {
			background: #1c1c1e;
		}
	}

	.hour {
		width: 0px;
		padding-top: calc(4 / 114 * 100%);

		span {
			text-align: center;
			font-size: 13.5px;
			font-size: 11.7cqw;
			font-weight: bold;
			letter-spacing: -0.05em;
		}
	}

	.dot {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
		border-radius: calc(infinity * 1px);

		&.top {
			z-index: 5;
		}
	}

	.text-outline {
		text-shadow: 0 0 1px black;
	}

	.rotate-60sec,
	.rotate-3600sec,
	.rotate-43200sec {
		animation: rotate-360deg linear infinite;
	}

	.rotate-60sec {
		animation-duration: 60s;
	}
	.rotate-3600sec {
		animation-duration: calc(60s * 60);
	}
	.rotate-43200sec {
		animation-duration: calc(60s * 60 * 12);
	}

	@keyframes rotate-360deg {
		from {
			transform: translateX(-50%) rotate(var(--initial-rotation));
		}
		to {
			transform: translateX(-50%) rotate(calc(var(--initial-rotation) + 360deg));
		}
	}
</style>
