<script>
  import { fade } from "svelte/transition"
</script>

<div in:fade out:fade>
  <slot />
</div>
