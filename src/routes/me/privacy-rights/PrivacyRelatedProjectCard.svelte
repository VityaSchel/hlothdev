<script lang="ts">
  let {
    icon,
    name,
    caption,
    link
  }: {
    icon: string
    name: string
    caption: string
    link: string
  } = $props()
</script>

<a
  href={link}
  rel="noopener noreferrer"
  target="_blank"
  class="
    flex w-full items-center gap-3 rounded-xl border border-[#bbbbbf] bg-white
    px-3 py-2 focus-sm-dark
    px1205:py-[11px] px1205:pr-6 px1205:pl-[21px]
  "
>
  <img
    class="shrink-0 rounded-sm text-[8px]"
    src={icon}
    alt="Icon of {name}"
    width="28"
    height="28"
  />
  <div class="flex flex-1 flex-col">
    <span
      class="
        text-sm font-semibold
        px1300:text-[17px]
      "
    >
      {name}
    </span>
    <span
      class="
        text-xs tracking-[0.2px] text-[#6e6e73]
        px1300:text-sm px1300:leading-[18px]
      "
    >
      {caption}
    </span>
  </div>
</a>
