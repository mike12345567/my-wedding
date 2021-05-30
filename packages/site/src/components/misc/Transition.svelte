<script>
  import { fade } from "svelte/transition"
</script>

<div in:fade>
  <slot />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
