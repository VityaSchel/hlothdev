<script lang="ts">
  import { page } from '$app/state'

  let {
    button,
    title,
    children,
    backUrl,
    class: className
  }: {
    button?: { href: string; external?: boolean; text: string }
    title: string
    children?: import('svelte').Snippet
    backUrl: string
    class?: import('svelte/elements').ClassValue
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
      <a
        href={backUrl}
        aria-label="Back to previous page"
        class="flex h-3 w-3 cursor-default items-center justify-center rounded-full text-white/55 active:text-[#EAEAEA]"
        draggable="false"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <!-- Only Safari supports style="mix-blend-mode:plus-darker" -->
            <path
              d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM8.93262 3.06738C8.60314 2.7379 8.05376 2.74201 7.7373 3.05371L6.00098 4.78516L4.26074 3.0498C3.96194 2.751 3.39064 2.73298 3.06543 3.0625C2.74023 3.3877 2.75391 3.95898 3.05273 4.25781L4.79297 5.99414L3.05273 7.73828C2.75391 8.03711 2.74023 8.60449 3.06543 8.92969C3.39063 9.25927 3.96192 9.2456 4.26074 8.94238L6.00098 7.20215L7.7373 8.93848C8.05375 9.25463 8.60311 9.25431 8.93262 8.9248C9.2575 8.59957 9.25722 8.05068 8.94531 7.73438L7.20996 5.99414L8.94531 4.2627C9.25724 3.94637 9.25756 3.39261 8.93262 3.06738Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </a>
      <div class="group flex flex-row items-center gap-1 text-[15px] font-semibold">
        <a
          href="https://hloth.dev{page.url.pathname}"
          aria-label="Current page"
          class={[
            'flex w-0 cursor-default overflow-clip transition-[width] duration-300 group-hover:w-5 focus-visible:w-5',
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
            class="h-[20.5px] object-cover object-right"
          />
        </a>
        <span class="select-none" aria-hidden="true">
          {title}
        </span>
      </div>
    </div>
    {#if button}
      <a
        href={button.href}
        rel={button.external ? 'noreferrer noopener' : undefined}
        target={button.external ? '_blank' : undefined}
        class="flex h-[22px] cursor-default items-center justify-center rounded-md border border-[#b6a68e]/40 px-[7px] text-[13px] text-[#ede1cf]/90 select-none hover:border-[#9b8a76] hover:bg-[#9b8a76] active:border-[#af9c86] active:bg-[#af9c86] active:text-[#f7efe2]"
      >
        {button.text}
      </a>
    {/if}
  </header>
  <div class={['max-h-[calc(100%-52px)] flex-1 p-[25px]', className]}>
    {@render children?.()}
  </div>
</div>
