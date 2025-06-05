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
  class="flex w-full items-center gap-3 rounded-xl border border-[#bbbbbf] bg-white py-[11px] pr-6 pl-[21px]"
>
  <img src={icon} alt="Icon of {name}" width="28" height="28" class="shrink-0 rounded-sm" />
  <div class="flex flex-1 flex-col">
    <span class="text-[17px] font-semibold">{name}</span>
    <span class="text-sm tracking-[0.2px] text-[#6e6e73] leading-[18px]">{caption}</span>
  </div>
</a>
