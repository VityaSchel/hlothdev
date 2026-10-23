import { json, type RequestHandler } from "@sveltejs/kit";
import { profile, resolveHref, type ProfileLink } from "#lib/profile.ts";
import { showcase } from "#lib/showcase/items.ts";
import { showcaseNames, websiteNames } from "#lib/showcase/index.ts";
import { originFor } from "#lib/utils.ts";

export const GET: RequestHandler = ({ url }) => {
	const onion = url.host.endsWith(".onion");
	const site = originFor(onion);
	const subdomainUrl = (subdomain: string, path: string) =>
		originFor(onion, `${subdomain}.`) + path;

	return json({
		name: profile.name,
		role: profile.role,
		location: profile.location,
		birthday: profile.birthday,
		summary: profile.summary,
		about: profile.about,
		links: Object.entries(profile.links).map(
			([id, link]: [string, ProfileLink]) => ({
				id,
				label: link.label,
				title: link.title,
				url: resolveHref(link.href, subdomainUrl),
				highlight: link.highlight === true,
			}),
		),
		showcase: Object.values(showcase).map(({ id, shortDescription }) => ({
			id,
			kind: Object.hasOwn(websiteNames, id) ? "website" : "project",
			name: showcaseNames[id],
			summary: shortDescription,
			url: `${site}/showcase/${id}`,
		})),
		donate: {
			url: `${site}/donate`,
			signedText: `${site}/donate-pgp-signed.txt`,
		},
	});
};
