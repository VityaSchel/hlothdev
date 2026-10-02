const lastSundayAt1Utc = (year: number, month: number) => {
	const date = new Date(Date.UTC(year, month + 1, 0, 1));
	date.setUTCDate(date.getUTCDate() - date.getUTCDay());
	return date;
};

export const getEuropeanTzOffset = (now = new Date()) => {
	const year = now.getUTCFullYear();
	return now >= lastSundayAt1Utc(year, 2) && now < lastSundayAt1Utc(year, 9)
		? 2
		: 1;
};
