<script>
  import Squircle from '$lib/Squircle.svelte'
</script>

<div class="drop-background-shadow relative max-w-full flex-[743] rounded-[16px]">
  <Squircle class="bg-black/10" cornerRadius={16} arrow>
    <div class="flex items-center gap-8 px-8 py-9 select-none">
      <img class="aspect-square h-auto w-[164px] rounded-full" src="/me-avatar.webp" alt="Me" />
      <div class="flex flex-1 flex-col gap-3">
        <div class="flex flex-col gap-[3px]">
          <span class="text-thick-typography text-5xl leading-[57px] font-bold tracking-[-0.1px]">
            Viktor Shchelochkov
          </span>
          <span class="text-thin-typography text-[28px] leading-[33px] font-bold tracking-[-0.2px]">
            Senior fullstack web apps developer
          </span>
        </div>
        <span class="text-2xl leading-[29px] font-semibold text-[rgba(123,123,123,0.4)]">
          19 y.o., Batumi, Georgia
        </span>
      </div>
    </div>
  </Squircle>
</div>

<style>
  .drop-background-shadow {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.25);
  }
</style>
