<script lang="ts">
  let { children }: { children: import('svelte').Snippet } = $props()
</script>

<div
  class="
    h-full w-[52px] overflow-visible
    [&>svg]:min-h-full
  "
>
  {@render children()}
</div>
