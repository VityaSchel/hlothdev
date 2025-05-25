<script lang="ts">
  import { page } from '$app/state'

  let {
    button,
    title,
    children
  }: {
    button?: string
    title: string
    children?: import('svelte').Snippet
  } = $props()

  // JS ONLY:
  // There is no way to differentiate between a pressed state and drag in CSS with :active pseudoclass
  let pressed = $state(false)
</script>

<div class="flex h-full w-full flex-col">
  <header
    class="border-px flex h-[52px] w-full shrink-0 items-center justify-between border border-x-0 border-t-0 border-white/25 px-[15px] py-[12px]"
  >
    <div class="ml-[3px] flex flex-row items-center gap-2">
      <!-- TODO: close button -->
      <div class="group flex flex-row items-center gap-1 text-[15px] font-semibold">
        <a
          href="https://hloth.dev{page.url.pathname}"
          aria-label="Current page"
          class={[
            'flex w-0 overflow-clip transition-[width] group-hover:w-5',
            {
              'brightness-[48%]': pressed
            }
          ]}
          onpointerdown={() => (pressed = true)}
          onpointerup={() => (pressed = false)}
          onblur={() => (pressed = false)}
          ondragstart={() => (pressed = false)}
          ondragend={() => (pressed = false)}
        >
          <img
            src="/file-icon.webp"
            alt="Steve Job's quote as a text file icon"
            width="20"
            height="20"
            class="h-5 min-w-5 object-left"
          />
        </a>
        <span class="select-none">
          {title}
        </span>
      </div>
    </div>
    {#if button}
      <button class="rounded-md border border-[#8a8070] px-[7px] py-[3px] text-[13px]">
        {button}
      </button>
    {/if}
  </header>
  <div class="max-h-[calc(100%-52px)] flex-1 p-[25px]">
    {@render children?.()}
  </div>
</div>
