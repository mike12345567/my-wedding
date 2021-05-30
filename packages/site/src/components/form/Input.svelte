<script>
  export let value = ""
  export let label = null
  export let disabled = false
  export let readonly = false
  export let error = null
  export let password = "text"
  export let width
  export let type

  function typeAction(node) {
    node.type = type;
  }
</script>

<div style={width ? `width: ${width}` : ""}>
  {#if label}
    <label class="block text-sm font-bold mb-2" for={label}>
      {label || ""}
    </label>
  {/if}
  <div>
    <div id={label}>
      <input
        style={width ? "width: 100%" : ""}
        class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        {disabled}
        {readonly}
        bind:value
        on:change
        on:click
        on:focus
        on:input
        on:keyup
        use:typeAction
      />
    </div>
    {#if error}
      <div class="error">{error}</div>
    {/if}
  </div>
</div>

<style>
  input {
    color: var(--text-color);
  }
  .error {
    color: darkred;
  }
  label {
    white-space: nowrap;
  }
  .field {
    width: 100%;
  }
</style>
