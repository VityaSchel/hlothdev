import { profile } from "#lib/profile.ts";

export function getMyAge() {
	const { year, month, day, utcOffsetHours } = profile.birthday;
	const birthdayTime = new Date(Date.now() + utcOffsetHours * 60 * 60 * 1000);
	const currentMonth = birthdayTime.getUTCMonth() + 1;
	const hadBirthday =
		currentMonth > month ||
		(currentMonth === month && birthdayTime.getUTCDate() >= day);
	return birthdayTime.getUTCFullYear() - year - (hadBirthday ? 0 : 1);
}
