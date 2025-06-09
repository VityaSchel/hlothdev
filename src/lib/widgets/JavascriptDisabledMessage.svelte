<script>
  import Alert from '$lib/ui/Alert.svelte'
</script>

<div
  class="
    max-w-full
    has-checked:hidden
  "
>
  <noscript>
    <Alert id="hideJavascriptDisabledMessage" class="w-[594px]">
      Looks like you’re visiting this website with
      <b class="font-semibold">JavaScript disabled.</b>
      <br />
      That’s totally fine! If you enable it, you’ll see some fancy animations.
      <br />
      Otherwise the website works the same regardless of whether it’s enabled.
    </Alert>
  </noscript>
</div>
