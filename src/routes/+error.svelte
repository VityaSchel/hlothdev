<script>
  import PageWrapper from '$lib/widgets/PageWrapper.svelte'
  import SubpageWrapper from '$lib/widgets/SubpageWrapper.svelte'
  import { page } from '$app/state'
</script>

<PageWrapper viewId="error">
  <SubpageWrapper title="+error.svelte" backUrl="/" class="flex justify-center items-center">
    <div class="bg-[#282828]/50 p-4 rounded-[10px] pt-5 flex flex-col gap-4 justify-center items-center text-center w-[260px] shadow-container mb-[10%]">
      <img src="/error-icon.webp" alt="Cartoon warthog head with its top blown off, revealing an exploding brain like a mushroom cloud" class="w-16 h-16">
      <div class="flex flex-col gap-[10px] text-white/85">
        <h1 class="text-[13px] font-bold leading-4">Error {page.status}</h1>
        <p class="text-[11px] font-normal leading-[14px]">
          {page.error?.message || 'An unexpected error occurred'}
        </p>
      </div>
      <a href="/" class="bg rounded-[5px] w-full min-h-[28px] py-[6px] text-[13px] leading-4 inset-shadow-top select-none" draggable="false">Return to Home Page</a>
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