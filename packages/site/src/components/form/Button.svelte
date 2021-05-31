<script>
  export let width
  export let disabled = false
  export let muted = false
</script>

<button class:muted on:click {disabled} style="width: {width ? width : '100%'}">
  <slot />
</button>

<style>
  button {
    background-color: var(--text-color);
    color: var(--primary-color);
    border: 2px solid var(--text-color);
    border-radius: 5px;
    padding: 5px;
    font-weight: bold;
  }

  .muted {
    background-color: var(--primary-color);
    color: var(--text-color);
  }

  button:hover:enabled {
    filter: brightness(90%);
  }

  button:active:enabled {
    filter: brightness(80%);
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
</style>
