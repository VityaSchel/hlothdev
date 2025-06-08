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
      class="px1180:gap-8 px1180:px-8 px1180:py-9 px920:gap-6 px870:gap-4 px620:px-8 flex h-full items-center gap-8 rounded-[16px] px-4 py-9 select-none md:gap-3 md:px-4 md:py-4"
    >
      <img
        class="px1380:w-[164px] px920:w-[140px] px870:w-[100px] aspect-square h-auto w-[140px] rounded-full md:w-[90px]"
        src="/me-avatar.webp"
        alt="Me"
      />
      <div class="px1420:gap-3 flex flex-1 flex-col gap-1">
        <div class="flex flex-col gap-[3px]">
          <span
            class="text-thick-typography px1180:text-3xl px1420:text-5xl px1180:leading-8 px1420:leading-[57px] px870:text-2xl px680:text-4xl px680:leading-12 text-3xl font-bold tracking-[-0.1px] md:text-xl md:leading-7 xl:text-4xl"
          >
            Viktor Shchelochkov
          </span>
          <span
            class="text-thin-alt-typography px1180:text-thin-typography px1180:text-xl px1180:leading-7 px1420:text-[28px] px1420:leading-[33px] px870:text-lg px680:text-2xl px680:leading-7 text-xl font-bold tracking-[-0.2px] md:text-base md:leading-5 xl:text-2xl"
          >
            Senior fullstack web apps developer
          </span>
        </div>
        <span
          class="px1180:text-xl text-thin-typography px1180:text-[rgba(123,123,123,0.4)] px870:text-lg px680:text-2xl px680:leading-[29px] text-xl font-semibold md:text-base xl:text-2xl"
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
