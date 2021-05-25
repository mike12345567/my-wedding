<script>
  import { createEventDispatcher } from "svelte"

  export let options = []
  export let value = null
  export let label = null
  export let disabled = false
  export let readonly = false
  export let error = null
  export let width

  const dispatch = createEventDispatcher()
  const onChange = e => {
    dispatch("change", e.detail)
  }
</script>

<div>
  {#if label}
    <label class="block text-sm font-bold mb-2" for={label}>
      {label || ""}
    </label>
  {/if}
  <div class="inline-block relative {width ? '' : 'w-64'}">
    <select
      id={label}
      style="{width ? 'width:' + width : ''}"
      class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      {disabled}
      {readonly}
      bind:value={value}
      on:change={onChange}
      on:click
      on:focus
      on:input
      on:keyup>
      {#each options as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
      </svg>
    </div>
  </div>
</div>

<style>
  select {
    color: var(--text-color);
  }
</style>