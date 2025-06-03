<script lang="ts">
  import GreetingsCard from '../GreetingsCard.svelte'
</script>

<GreetingsCard>
  <div class="flex">
    <div class="flex flex-col justify-between p-[34px] flex-1">
      <nav>
        <a
          href="/me"
          aria-label="Go back to the /me page"
          class="flex w-fit overflow-clip rounded-full"
        >
          <svg
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="36" height="36" rx="18" fill="white" fill-opacity="0.6" />
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
      <div class="flex flex-col gap-7">
        <h1 class="indent-hanging text-[39px] leading-[37px] font-bold">
          „Think different“
          <br />
          <span class="text-[29px] font-semibold">is my life slogan</span>
        </h1>
        <p class="text-2xl">
          Think different — and everyone thinks you’re weird. That’s how I felt growing up. I always
          felt being two steps ahead of my classmates — I made my first website when I was 9 and
          hacked my school at 15. At 16 I realized I want to chase a dream of becoming an independent
          artist in programming world, not a college degree.
          <br />
          My parents couldn’t appreciate my talent and were forcing me to study, which is why I moved to
          my own apartaments when I was 17. People, whose goal in life is to serve the country and have
          two kids, think that a progressive young man announcing he’s moving to Europe with his boyfriend
          is crazy. But I think different.
        </p>
      </div>
    </div>
  </div>
</GreetingsCard>

<style>
  .indent-hanging {
    text-indent: -0.35em;
  }
</style>
