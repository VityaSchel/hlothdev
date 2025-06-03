<script lang="ts">
  import GreetingsCard from '../GreetingsCard.svelte'
</script>

<GreetingsCard>
  <div class="animate-opacity flex h-full">
    <div class="flex flex-1 items-start gap-[34px] overflow-auto p-[34px]">
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
      <div class="flex flex-1 flex-col text-xl leading-[35px] font-medium">
        <h1 class="indent-hanging mb-7 text-[39px] leading-[37px] font-bold">
          „Think different“
          <br />
          <span class="text-[29px] font-semibold">is my life slogan</span>
        </h1>
        <p>
          Thinking different was a choice I made early in life. As a kid, I often felt two steps
          ahead of my classmates — and out of place because of it. While others followed the
          curriculum, I was tinkering with computers, building my first website at 9 and discovering
          my first security vulnerability in my school’s IT system by 15. Instead of curiosity, I
          was met with suspicion.
        </p>
        <p class="mt-3">
          At school IT competitions, most participants showcased recycled ideas — generic research,
          overused robots, or well-known solutions for unneeded problems. I think different, so I
          always focused on creativity, innovation, and real-world usefulness, surprising juries
          with modern technologies outstanding from what they're used to.
        </p>
        <p class="mt-3">
          At home, it wasn’t much different. My parents didn’t see value in my path and pressured me
          to study. By 17, I moved into my own apartment to create space for the future I believed
          in. People, whose whole goal in life is to serve the country and have two kids, think that
          a progressive young boy announcing he’s moving to Europe with his boyfriend is crazy. But
          I think different.
        </p>
      </div>
    </div>
    <img src="/me-in-pink-hat.webp" alt="Me in a pink hat" class="shrink-0" />
  </div>
</GreetingsCard>

<style>
  .indent-hanging {
    text-indent: -0.35em;
  }
  .animate-opacity {
    opacity: 0;
    animation: fadeIn 0.5s forwards;
    animation-delay: 20ms;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
