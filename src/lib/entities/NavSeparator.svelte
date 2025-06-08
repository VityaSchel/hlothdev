<script lang="ts">
  let {
    class: className
  }: {
    class?: import('svelte/elements').ClassValue
  } = $props()
</script>

<hr class={className} />

<style>
  hr {
    border: 0;
    background-color: #627457;
    width: 1px;
    height: 46px;
    margin: auto 10.5px;
    border-radius: 1px;
    flex-shrink: 0;
  }
</style>
