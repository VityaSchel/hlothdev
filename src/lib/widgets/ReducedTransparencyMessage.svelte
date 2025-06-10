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
    'hidden max-w-full',
    {
      'transparency-reduce:block': visible
    }
  ]}
>
  <Alert class="w-[550px]" id="reduced-transparency" srName="Transparency reduced" {visible}>
    <b class="font-semibold">Reduce transparency</b>
    preference was detected in your OS settings.
    <br />
    All tranlucent background materials will be rendered as solid.
    <br />
    If you have enabled it accidentally,
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency#user_preferences"
      target="_blank"
      rel="noopener noreferrer nofollow"
      class="font-semibold"
    >
      here’s how to disable it.
    </a>
  </Alert>
</div>
