<script lang="ts">
	import XsCard from "$lib/widgets/grid-cards/XSCard.svelte";
	import Clock from "$lib/widgets/Clock.svelte";
	import { getEuropeanTzOffset } from "$lib/cet-cest";

	const utcOffsetHours: number = getEuropeanTzOffset();
	const utcOffsetMinutes: number = 0;
	const timezone = `UTC${utcOffsetHours >= 0 ? "+" : ""}${utcOffsetHours}${
		utcOffsetMinutes ? ":" + utcOffsetMinutes.toString().padStart(2, "0") : ""
	}`;
</script>

<XsCard
	class="col-start-3 col-end-4 row-start-9 row-end-10 flex items-center
		justify-center bg-[rgba(0,0,0,0.3)] p-1 px580:row-start-8 px580:row-end-9
		md:col-start-5 md:col-end-6 md:row-start-5 md:row-end-6 px1180:col-start-7
		px1180:col-end-8 px1180:row-start-3 px1180:row-end-4
		transparency-reduce:bg-[rgba(0,0,0,0.3)]"
	aria-label="My local time card"
>
	<h3 class="sr-only">My timezone: {timezone}</h3>
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
</XsCard>
