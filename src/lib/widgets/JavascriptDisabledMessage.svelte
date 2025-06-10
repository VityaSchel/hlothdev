<script lang="ts">
  import Alert from '$lib/ui/Alert.svelte'

  let {
    visible = $bindable()
  }: {
    visible: boolean
  } = $props()
</script>

<div
  class={[
    'max-w-full',
    {
      hidden: !visible
    }
  ]}
>
  <noscript>
    <Alert class="w-[575px]" id="javascript-disabled" srName="JavaScript disabled" {visible}>
      Looks like you’re visiting this website with
      <b class="font-semibold">JavaScript disabled.</b>
      <br />
      That’s totally fine! If you enable it, you’ll see some fancy animations.
      <br />
      Otherwise the website works the same regardless of whether it’s enabled.
    </Alert>
  </noscript>
</div>
