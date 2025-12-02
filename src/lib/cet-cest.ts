export function getLastSunday(year: number, month: number) {
	const date = new Date(year, month + 1, 0);

	while (date.getDay() !== 0) {
		date.setDate(date.getDate() - 1);
	}

	date.setHours(1, 0, 0, 0);
	return date;
}

export function getEuropeanTzOffset() {
	const now = new Date();

	const year = now.getFullYear();

	const March = 2;
	const marchLastSunday = getLastSunday(year, March);
	const October = 9;
	const octLastSunday = getLastSunday(year, October);

	if (now >= marchLastSunday && now < octLastSunday) {
		return +2;
	} else {
		return +1;
	}
}
