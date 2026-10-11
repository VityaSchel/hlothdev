<script lang="ts">
	import GridCard from "#lib/widgets/grid-cards/GridCard.svelte";
	import Clock from "#lib/widgets/Clock.svelte";
	import { getEuropeanTzOffset } from "#lib/cet-cest.ts";

	const utcOffsetHours: number = getEuropeanTzOffset();
	const utcOffsetMinutes: number = 0;
	const timezone = `UTC${utcOffsetHours >= 0 ? "+" : ""}${utcOffsetHours}${
		utcOffsetMinutes ? ":" + utcOffsetMinutes.toString().padStart(2, "0") : ""
	}`;
</script>

<GridCard
	size="xs"
	class="col-start-3 col-end-4 row-start-9 row-end-10 flex items-center
		justify-center bg-black/30 p-1 px580:row-start-8 px580:row-end-9
		md:col-start-5 md:col-end-6 md:row-start-5 md:row-end-6 px1180:col-start-7
		px1180:col-end-8 px1180:row-start-3 px1180:row-end-4"
	aria-label="My local time card"
>
	<h2 class="sr-only">My timezone: {timezone}</h2>
	<div
		class="flex aspect-square h-full w-auto max-w-full items-center
			justify-center"
		aria-hidden="true"
	>
		<div
			class="flex aspect-square h-auto max-h-full w-full items-center
				justify-center"
		>
			<Clock {utcOffsetHours} {utcOffsetMinutes} {timezone} />
		</div>
	</div>
</GridCard>
