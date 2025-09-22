<script lang="ts" module>
  import type { PortfolioItem } from '$lib/portfolio'

  export const sipackerWebsite: PortfolioItem = {
    type: 'website',
    id: 'sipacker',
    name: 'SIPacker',
    description,
    shortDescription: '',
    banner: '/projects/sipacker/banner.webp',
    images: [
      {
        url: '/projects/sipacker/screenshot-1.webp',
        alt: 'SIPacker website screenshot 1'
      }
    ],
    links: [
      {
        url: 'https://sipacker.netlify.app/',
        label: 'Visit SIPacker'
      },
      {
        url: 'https://github.com/VityaSchel/SIPacker',
        label: 'Open SIPacker source code'
      }
    ]
  }
</script>

{#snippet description()}
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <h2>Heading</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <h2>Heading</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
{/snippet}
