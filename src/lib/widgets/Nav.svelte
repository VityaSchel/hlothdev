<script lang="ts">
  import Squircle from '$lib/Squircle.svelte'
  import NavItem from '$lib/entities/NavItem.svelte'
  import NavSeparator from '$lib/entities/NavSeparator.svelte'
  import Tooltip from '$lib/ui/Tooltip.svelte'

  let selectedNavItem: {
    element: HTMLElement
    name: string
    x: number
    y: number
  } | null = $state(null)
</script>

<nav
  class="relative h-[65px] shrink-0 rounded-[16px] select-none"
  onpointerleave={() => (selectedNavItem = null)}
>
  {#if selectedNavItem !== null}
    <Tooltip {selectedNavItem}>{selectedNavItem.name}</Tooltip>
  {/if}
  <Squircle
    class="
      bg-thick
      transparency-reduce:bg-opaque-row
    "
    cornerRadius={16}
    translucent
  >
    <div class="flex items-center gap-[2px] px-[5px]">
      <NavItem
        icon="/dock-icons/upwork.webp"
        name="My Upwork"
        highlight
        link="https://www.upwork.com/freelancers/~01a1f59e7a4697be89"
        bind:selectedNavItem
        class="
          hidden
          px500:block
        "
      />
      <NavItem
        icon="/dock-icons/github.webp"
        name="My GitHub"
        highlight
        link="https://github.com/VityaSchel/"
        bind:selectedNavItem
      />
      <NavItem
        icon="/dock-icons/linkedin.webp"
        name="My LinkedIn"
        highlight
        link="https://www.linkedin.com/in/hloth"
        bind:selectedNavItem
        class="
          hidden
          px350:block
        "
      />
      <NavSeparator
        class="
          hidden
          px400:block
        "
      />
      <NavItem
        icon="/dock-icons/element.webp"
        highlight
        name="Contact me via Matrix (preferred)"
        link="https://matrix.to/#/@hloth:hloth.dev"
        bind:selectedNavItem
      />
      <NavItem
        icon="/dock-icons/telegram.webp"
        name="Contact me via Telegram"
        link="https://t.me/hlothdev"
        bind:selectedNavItem
        class="
          hidden
          px300:block
        "
      />
      <NavItem
        icon="/dock-icons/discord.webp"
        name="Contact me via Discord"
        link="https://discord.com/users/329249421332316166"
        bind:selectedNavItem
        class="
          hidden
          px600:block
        "
      />
      <NavSeparator
        class="
          hidden
          px400:block
        "
      />
      <NavItem
        icon="/dock-icons/mail.webp"
        name="Contact me via email"
        link="mailto:hi@hloth.dev"
        bind:selectedNavItem
      />
      <NavItem
        icon="/dock-icons/blog.webp"
        name="My blog"
        link="https://blog.hloth.dev/"
        bind:selectedNavItem
        class="
          hidden
          px450:block
        "
      />
      <NavItem
        icon="/dock-icons/instagram.webp"
        name="My Instagram"
        link="https://instagram.com/vityaczech"
        bind:selectedNavItem
      />
    </div>
  </Squircle>
</nav>
