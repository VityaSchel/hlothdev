export function getMyAge() {
	const now = new Date();
	const samaraTime = new Date(
		now.getTime() + 4 * 60 * 60 * 1000 + now.getTimezoneOffset() * 60 * 1000,
	);
	let years = samaraTime.getFullYear() - 2005;
	const month = samaraTime.getMonth() + 1;
	const day = samaraTime.getDate();

	if (month < 7 || (month === 7 && day < 6)) years--;
	return years;
}
