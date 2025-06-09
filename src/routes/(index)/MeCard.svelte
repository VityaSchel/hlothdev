<script>
  import Squircle from '$lib/Squircle.svelte'
</script>

<a
  href="/me"
  class="
    drop-background-shadow relative max-w-full cursor-default rounded-[16px]
    px420:flex-1
    px1380:flex-[743]
  "
  style="view-transition-name: me;"
>
  <Squircle class="bg-black/10" cornerRadius={16} arrow>
    <div
      class="
        flex h-full flex-col items-center gap-3 rounded-[16px] px-4 py-4
        text-center select-none
        px470:flex-row px470:text-left
        px530:gap-5
        px600:py-9
        px620:gap-8 px620:px-8
        md:gap-3 md:px-4 md:py-4
        px870:gap-4
        px920:gap-6
        px1180:gap-8 px1180:px-8 px1180:py-9
      "
    >
      <img
        class="
          aspect-square h-auto w-[100px] rounded-full
          px530:w-[140px]
          md:w-[90px]
          px870:w-[100px]
          px920:w-[140px]
          px1380:w-[164px]
        "
        src="/me-avatar.webp"
        alt="Me"
        draggable="false"
      />
      <div
        class="
          flex flex-1 flex-col gap-2
          px380:gap-1
          px1420:gap-3
        "
      >
        <div
          class="
            flex flex-col gap-2
            px380:gap-[3px]
          "
        >
          <span
            class="
              text-xl font-bold tracking-[-0.1px] text-thick-typography
              px330:text-2xl
              px600:text-3xl
              px680:text-4xl px680:leading-12
              md:text-xl md:leading-7
              px870:text-2xl
              px1180:text-3xl px1180:leading-8
              xl:text-4xl
              px1420:text-5xl px1420:leading-[57px]
            "
          >
            Viktor Shchelochkov
          </span>
          <span
            class="
              text-base leading-4 font-bold tracking-[-0.2px]
              text-thin-alt-typography
              px530:text-lg px530:leading-5
              px600:text-xl px600:leading-7
              px680:text-2xl px680:leading-7
              md:text-base md:leading-5
              px870:text-lg
              px1180:text-xl px1180:leading-7 px1180:text-thin-typography
              xl:text-2xl
              px1420:text-[28px] px1420:leading-[33px]
            "
          >
            Senior fullstack web apps developer
          </span>
        </div>
        <span
          class="
            text-base font-semibold text-thick-alt-typography
            px530:text-lg
            px600:text-xl
            px680:text-2xl px680:leading-[29px]
            md:text-base md:text-thin-typography
            px870:text-lg
            px1180:text-xl px1180:text-[rgba(123,123,123,0.4)]
            xl:text-2xl
          "
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
