<script>
  import Alert from '$lib/ui/Alert.svelte'
</script>

<div
  class="
    hidden max-w-full
    motion-reduce:block
  "
>
  <Alert class="w-[560px]" id="hideReducedMotionMessage">
    Looks like you have enabled
    <b class="font-semibold">reduce motion</b>
    setting in your system.
    <br />
    I have replaced all motion animations with fade on this page for you!
    <br />
    In case you have enabled it accidentally,
    <a
      href="https://prefers-reduced-motion.com/"
      target="_blank"
      rel="noopener noreferrer nofollow"
      class="font-semibold"
    >
      here’s how to disable it.
    </a>
  </Alert>
</div>
