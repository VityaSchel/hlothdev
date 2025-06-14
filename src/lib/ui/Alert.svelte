<script lang="ts">
  import { enhance } from '$app/forms'
  import { invalidate } from '$app/navigation'
  import { page } from '$app/state'

  let {
    id,
    srName,
    class: className,
    children,
    visible = $bindable(false)
  }: {
    id: string
    srName: string
    class?: import('svelte/elements').ClassValue
    children: import('svelte').Snippet
    visible?: boolean
  } = $props()

  // This was supposed to be a serverless alert without js
  // but browsers don't save checkbox state across page navigations
</script>

<!-- <input
  type="checkbox"
  {id}
  checked={visible}
  class="peer hidden"
  tabindex={-1}
  aria-hidden="true"
  autocomplete=""
/> -->
<aside
  role="alert"
  class={[
    `
      animate-in alert-shadow relative max-w-full rounded-[10px]
      bg-gradient-to-br from-[#b5acac] to-[#a3aca0] p-[10px] pr-3 text-right
      leading-[19px] font-medium text-[#373737] transition-opacity
      transparency-reduce:bg-[#b9b9b9]
      transparency-reduce:[background-image:none]
      [&_br]:hidden
      sm:[&_br]:block
    `,
    {
      'opacity-100': visible,
      'animate-none! opacity-0': !visible
    },
    className
  ]}
>
  <h2 class="sr-only">{srName} alert</h2>
  <form
    action="/?/dismiss"
    class="float-left inline-block h-[19px]"
    method="POST"
    use:enhance={() => {
      visible = false
      return ({ update, result }) => {
        if (result.type === 'success' || result.type === 'redirect') {
          invalidate('app:alerts-dismissed')
        } else {
          visible = true
        }
        update()
      }
    }}
  >
    <input type="hidden" name="redirect" value={page.url.pathname} />
    <input type="hidden" name="alert" value={id} />
    <!-- <label for={id} /> -->
    <button
      class="
        flex h-full items-center justify-center pr-2 pl-0.5 text-black/50
        active:text-black/70
      "
      draggable="false"
      aria-label="Close {srName} alert"
      type="submit"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM8.93262 3.06738C8.60314 2.7379 8.05376 2.74201 7.7373 3.05371L6.00098 4.78516L4.26074 3.0498C3.96194 2.751 3.39064 2.73298 3.06543 3.0625C2.74023 3.3877 2.75391 3.95898 3.05273 4.25781L4.79297 5.99414L3.05273 7.73828C2.75391 8.03711 2.74023 8.60449 3.06543 8.92969C3.39063 9.25927 3.96192 9.2456 4.26074 8.94238L6.00098 7.20215L7.7373 8.93848C8.05375 9.25463 8.60311 9.25431 8.93262 8.9248C9.2575 8.59957 9.25722 8.05068 8.94531 7.73438L7.20996 5.99414L8.94531 4.2627C9.25725 3.94637 9.25756 3.39261 8.93262 3.06738Z"
          fill="currentColor"
        />
      </svg>
    </button>
  </form>
  {@render children()}
</aside>

<style>
  .animate-in {
    animation: fade-in 0.3s ease-in-out;
    animation-name: fade-in, slide-in;
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-in {
      animation-name: fade-in;
    }
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slide-in {
    from {
      transform: translateY(10px);
    }
    to {
      transform: translateY(0);
    }
  }
  .alert-shadow {
    box-shadow:
      0 4px 35px rgba(0, 0, 0, 0.4),
      0 12px 45px rgba(0, 0, 0, 0.7);
  }
</style>
