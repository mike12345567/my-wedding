<script>
  let active = false
  export let click = ""
  export let width
</script>

<button
  on:click={() => (active = !active)}
  style="width: {width ? width : '100%'}"
>
  <slot />
</button>

<style>
  button {
    background-color: var(--primary-color);
    color: var(--text-color);

    border: 2px solid var(--text-color);
    border-radius: 5px;
  }
</style>
