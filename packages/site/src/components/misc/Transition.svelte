<script>
  import { fade } from "svelte/transition"

  export let component
</script>

<div in:fade out:fade>
  <slot />
</div>
