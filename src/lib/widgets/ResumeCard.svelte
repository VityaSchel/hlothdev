<script>
  import Squircle from '$lib/Squircle.svelte'
</script>

<div class="drop-background-shadow relative max-w-full flex-1 rounded-[16px]">
  <Squircle class="bg-black/10" cornerRadius={16}>
    <div class="flex items-center gap-[18px] px-4 py-4">
      <div class="w-16 h-16 rounded-full bg-gray-400"></div>
      <div class="flex flex-1 flex-col gap-[6px]">
        <span class="text-5xl font-bold text-thick-typography">Jump to resume & CV</span>
        <span class="text-[28px] font-bold text-thin-typography">
          Senior fullstack web apps developer
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
