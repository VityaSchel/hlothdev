<script>
  import PageWrapper from '$lib/widgets/PageWrapper.svelte'
  import SubpageWrapper from '$lib/widgets/SubpageWrapper.svelte'
  import { page } from '$app/state'
  import PageMetadata from '$lib/widgets/PageMetadata.svelte'
</script>

<PageMetadata name={page.status === 404 ? 'Page Not Found' : `Error ${page.status}`} />
<PageWrapper viewId="error">
  <SubpageWrapper
    class="flex items-center justify-center"
    title="+error.svelte"
    srTitle="Error page"
    backUrl="/"
  >
    <div
      class="
        shadow-container mb-[10%] flex w-[260px] flex-col items-center
        justify-center gap-4 rounded-[10px] bg-[#282828]/50 p-4 pt-5 text-center
      "
    >
      <img
        src="/error-icon.webp"
        alt="Cartoon warthog head with its top blown off, revealing an exploding brain like a mushroom cloud"
        class="h-16 w-16 text-center text-[7px] leading-[8px]"
      />
      <div class="flex flex-col gap-[10px] text-white/85">
        <h1 class="text-[13px] leading-4 font-bold">Error {page.status}</h1>
        <p class="text-[11px] leading-[14px] font-normal">
          {page.error?.message || 'An unexpected error occurred'}
        </p>
      </div>
      <a
        href="/"
        class="
          bg inset-shadow-top min-h-[28px] w-full rounded-[5px] py-[6px]
          text-[13px] leading-4 select-none
        "
        draggable="false"
      >
        Return to Home Page
      </a>
    </div>
  </SubpageWrapper>
</PageWrapper>

<style lang="scss">
  .bg {
    $gradient: linear-gradient(to bottom, rgba(255, 255, 255, 0.17), rgba(0, 0, 0, 0));
    $foreground: rgba(10, 130, 255, 0.75);
    background-image: $gradient, linear-gradient($foreground, $foreground);

    &:active {
      $foreground: rgba(10, 132, 255, 1);
      background-image: $gradient, linear-gradient($foreground, $foreground);
    }
  }
  .inset-shadow-top {
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.35);
  }
  .shadow-container {
    box-shadow:
      0 0 1px 0 rgba(0, 0, 0, 0.6),
      0 0 2px 0 rgba(0, 0, 0, 0.05),
      0 38px 90px 0 rgba(0, 0, 0, 0.25),
      inset 0 0 2px 0 rgba(255, 255, 255, 0.2);
  }
</style>
