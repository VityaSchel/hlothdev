const samaraUtcOffset = 4 * 60 * 60 * 1000;

export function getMyAge() {
	const samaraTime = new Date(Date.now() + samaraUtcOffset);
	const month = samaraTime.getUTCMonth() + 1;
	const hadBirthday =
		month > 7 || (month === 7 && samaraTime.getUTCDate() >= 6);
	return samaraTime.getUTCFullYear() - 2005 - (hadBirthday ? 0 : 1);
}
