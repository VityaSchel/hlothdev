<script lang="ts" module>
	import type { ShowcaseItem } from "$lib/showcase/items";
	import banner from "$showcase/mit-hloth-dev/banner.webp?enhanced&quality=100";
	import bannerLqip from "$showcase/mit-hloth-dev/banner.webp?lqip";
	import screenshot1 from "$showcase/mit-hloth-dev/screenshot-1.webp?enhanced&quality=100";
	import screenshot1Lqip from "$showcase/mit-hloth-dev/screenshot-1.webp?lqip";
	import screenshot2 from "$showcase/mit-hloth-dev/screenshot-2.webp?enhanced&quality=100";
	import screenshot2Lqip from "$showcase/mit-hloth-dev/screenshot-2.webp?lqip";
	import screenshot3 from "$showcase/mit-hloth-dev/screenshot-3.webp?enhanced&quality=100";
	import screenshot3Lqip from "$showcase/mit-hloth-dev/screenshot-3.webp?lqip";
	import { getMainDomain, getMainDomainProtocol } from "$lib/utils";

	export const mitLicenseWebsite: ShowcaseItem = {
		type: "website",
		id: "mit-hloth-dev",
		name: "mit.hloth.dev",
		description,
		shortDescription:
			"A website explaining why all my projects are licensed under MIT",
		banner: {
			src: banner,
			lqip: bannerLqip,
		},
		images: [
			{
				src: screenshot1,
				lqip: screenshot1Lqip,
				alt: "mit.hloth.dev screenshot with text: Why MIT license? It reflects the way I want my work to be felt. 01. Simple: 154 words — straight to the point. 02. Driving: Adopt, remix, distribute — it drives innovation. 03. Fair: Under one condition: attribution somewhere on the licenses page. MIT license has been the #1 most popular open source license since at least 2008. It's used by successfull open-source projects you heard of: Node.js, Preact, React, React Native, Next.js, Nestjs, Svelte & SvelteKit, Vue & Nuxt.js, Angular, Gatsby, React-Router, jQuery, Electron, Tauri, nw.js, Express, Fastify, Elysia, Bun, Webpack, Babel, Vite, Bootstrap, TailwindCSS, Mocha, Chai, Three.js, zod, Axios, date-fns, Material UI, Shaden UI, Chartjs, Redux, Ruby on Rails, ESLint, Prettier, esbuild, Cypress, Jest, Gitea, Jekyll, Visual Studio Code, traefik, GitLab, ohmyzsh, Rust, Godot, Zig, nvm, Bitcoin, and so, so many more! Even more if we count all permissive licenses like Apache-2.0, BSD, ISC, etc. According to GitHub there are 16.2M public repositories with MIT license as of September 2025!",
			},
			{
				src: screenshot2,
				lqip: screenshot2Lqip,
				alt: 'change.mit.hloth.dev screenshot with text: Change MIT license! — (Image of a screaming horrifying emoji shouting): Request license change in my project. Answer a few questions to get started: 1.Where is the problematic project located? • git.hloth.dev • Other. 2. Link to your project. 3. Link to my project. "Submit" button.',
			},
			{
				src: screenshot3,
				lqip: screenshot3Lqip,
				alt: "mit.hloth.dev screenshot with text: Compare it!\n\n\nMIT license — Copyright (c) [year] [fullname] Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. That was concise!\n\n\nGPL License — GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed. Preamble The GNU General Public License is a free, copyleft license for software and other kinds of works. The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too. When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things. To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others. For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights. Developers that use the GNU GPL protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License giving you legal permission to copy, distribute and/or modify it. For the developers' and authors' protection, the GPL clearly explains that there is no warranty for this free software. For both users' and authors' sake, the GPL requires that modified versions be marked as changed, so that their problems will not be attributed erroneously to authors of previous versions. Some devices are designed to deny users access to install or run modified versions of the software inside them, although the manufacturer can do so. This is fundamentally incompatible with the aim of... <The text is cut off leaving about 5000 more words out of the frame>",
			},
		],
		links: [
			{
				url: `${getMainDomainProtocol()}://mit.${getMainDomain()}`,
				label: "Visit mit.hloth.dev",
			},
			{
				url: `${getMainDomainProtocol()}://git.${getMainDomain()}/hloth/mit.hloth.dev`,
				label: "Open mit.hloth.dev source code",
			},
			{
				url: `${getMainDomainProtocol()}://change.${getMainDomain()}`,
				label: "Visit change.mit.hloth.dev",
			},
			{
				url: `${getMainDomainProtocol()}://git.${getMainDomain()}/hloth/change.mit.hloth.dev`,
				label: "Open change.mit.hloth.dev source code",
			},
		],
	};
</script>

{#snippet description()}
	<p>
		All projects by hloth are licensed under MIT license. Except forks and
		derivative works based on GPL-licensed projects.
	</p>
	<h2>Why MIT license?</h2>
	<p>It reflects the way I want my work to be felt.</p>
	<ol class="my-2 list-[decimal-leading-zero] ps-7">
		<li>Simple: 154 words — straight to the point.</li>
		<li>Driving: Adopt, remix, distribute — it drives innovation.</li>
		<li>
			Fair: Under one condition: attribution somewhere on the licenses page.
		</li>
	</ol>
	<p>
		MIT license has been the #1 most popular open source license since at least
		2008. It's used by ton of successfull open-source projects you heard of.
		According to GitHub there are 16.2M public repositories with MIT license as
		of September 2025!
	</p>
	<h2>change.mit.hloth.dev</h2>
	<p>
		A few of my projects were forced to be licensed under copyleft licenses.
		Feel like you're missing out? Report your project being stolen and
		relicensed by me using this stinky button → <a
			href="{getMainDomainProtocol()}://change.mit.{getMainDomain()}"
			target="_blank"
			rel="noopener noreferrer">change.mit.{getMainDomain()}</a
		>
	</p>
{/snippet}
