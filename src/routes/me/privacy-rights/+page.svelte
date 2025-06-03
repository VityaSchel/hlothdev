<script lang="ts">
  import '@fontsource-variable/sofia-sans-condensed'
  import PrivacyRightsCard from '../PrivacyRightsCard.svelte'
</script>

<PrivacyRightsCard>
  <div
    class="content-container relative z-[1] flex h-full gap-8 rounded-[13px] p-8"
    style="view-transition-name: privacy-rights-content;"
  >
    <div class="flex h-full flex-1 flex-col justify-between gap-8">
      <nav class="sticky top-0 left-0 z-[1] shrink-0">
        <a
          href="/me"
          aria-label="Go back to the /me page"
          class="flex w-fit cursor-default overflow-clip rounded-full text-white/60 active:text-neutral-300/80"
          draggable="false"
        >
          <svg
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="36" height="36" rx="18" fill="currentColor" />
            <path
              d="M24.25 12.25L11.75 24.75M11.75 12.25L24.25 24.75"
              stroke="#161616"
              stroke-opacity="0.8"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </nav>
      <div
        class="content font-compact-display flex w-[610px] max-w-full flex-col leading-[19px] font-medium"
      >
        <h1 class="font-extra-condensed mb-2 text-5xl font-extrabold uppercase">
          Privacy Is A Human Right
        </h1>
        <h2 class="font-condensed mb-4 text-2xl font-bold">
          I'm committed to make privacy not just a feature, but a foundation.
        </h2>
        <p>
          To me, privacy is a fundamental human right — non-negotiable, deeply personal, and
          essential for freedom and dignity in the digital age. I deeply believe that people deserve
          control over their data, their conversations, and their identities.
        </p>
        <p>
          I contribute to a privacy-focused, end-to-end encrypted Session messenger that keeps
          communication secure and people connected using decentralized network. All my open source
          projects reflect the same philosophy.
        </p>
        <p>
          Trusting your data to cloud means trusting whoever hosts it. I prefer selfhosting on
          infrastructure that I can control. Same mindset shapes my approach to web: I make websites
          that respect visitors decision to enable JavaScript, design them with privacy in mind and
          host some of them in the onion network under the .loki domain.
        </p>
        <p>
          I build for people who care about their digital lives, who understand that privacy isn’t a
          trend.
          <br />
          It’s a right worth fighting for.
        </p>
      </div>
    </div>
    <img src="/me-in-pink-hat.webp" alt="Me in a pink hat" class="shrink-0" />
  </div>
</PrivacyRightsCard>

<style lang="scss">
  @use 'sass:math';

  .content-container {
    $radius: 610px + 32px;
    background-image: radial-gradient(
      circle farthest-side at bottom left,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.5) ($radius * 0.66),
      rgba(255, 255, 255, 0) $radius
    );

    .content {
      p {
        letter-spacing: -0.03em;
        font-weight: 500;

        & + p {
          margin-top: 16px;
        }
      }
    }
  }
</style>
