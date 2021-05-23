<script>
  import { fade } from "svelte/transition"
</script>

<div in:fade out:fade>
  <slot />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
