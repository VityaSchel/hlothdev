<script>
  import Squircle from '$lib/Squircle.svelte'
</script>

<a
  href="/me"
  class="drop-background-shadow px1380:flex-[743] relative max-w-full flex-1 cursor-default rounded-[16px]"
  style="view-transition-name: me;"
>
  <Squircle class="bg-black/10" cornerRadius={16} arrow>
    <div
      class="px1180:gap-8 px1180:px-8 px1180:py-9 px920:gap-6 flex h-full items-center gap-3 px870:gap-4 rounded-[16px] px-4 py-4 select-none"
    >
      <img
        class="px1380:w-[164px] px920:w-[140px] aspect-square h-auto w-[90px] px870:w-[100px] rounded-full"
        src="/me-avatar.webp"
        alt="Me"
      />
      <div class="px1420:gap-3 flex flex-1 flex-col gap-1">
        <div class="flex flex-col gap-[3px]">
          <span
            class="text-thick-typography px1180:text-3xl px1420:text-5xl px1180:leading-8 px1420:leading-[57px] px870:text-2xl text-xl leading-7 font-bold tracking-[-0.1px] xl:text-4xl"
          >
            Viktor Shchelochkov
          </span>
          <span
            class="text-thin-alt-typography px1180:text-thin-typography px1180:text-xl px1180:leading-7 px1420:text-[28px] px1420:leading-[33px] px870:text-lg text-base leading-5 font-bold tracking-[-0.2px] xl:text-2xl"
          >
            Senior fullstack web apps developer
          </span>
        </div>
        <span
          class="px1180:text-xl text-thin-typography px1180:text-[rgba(123,123,123,0.4)] px870:text-lg text-base leading-[29px] font-semibold xl:text-2xl"
        >
          19 y.o., Batumi, Georgia
        </span>
      </div>
    </div>
  </Squircle>
</a>

<style>
  .drop-background-shadow {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.25);
  }
</style>
