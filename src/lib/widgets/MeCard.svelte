<script>
  import Squircle from '$lib/Squircle.svelte'
</script>

<div class="relative max-w-full flex-[743] rounded-[16px] drop-background-shadow">
  <Squircle class="bg-black/10" cornerRadius={16}>
    <div class="flex items-center gap-8 px-8 py-9">
      <div class="aspect-square h-auto w-[164px] rounded-full bg-gray-400"></div>
      <div class="flex flex-1 flex-col gap-3">
        <div class="flex flex-col gap-[3px]">
          <span class="font-bold text-5xl text-thick-typography">Viktor Shchelochkov</span>
          <span class="font-bold text-[28px] text-thin-typography">Senior fullstack web apps developer</span>
        </div>
        <span class="font-semibold text-2xl text-[rgba(123,123,123,0.4)]">19 y.o., Batumi, Georgia</span>
      </div>
    </div>
  </Squircle>
</div>

<style>
  .drop-background-shadow {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.25);
  }
</style>