<script>
  export let primary = false
  export let size
  export let weight
  export let shadow = false
  export let bold
</script>

<!-- prettier-ignore -->
<div
  class:bold
  class="{primary ? 'prim-font' : 'second-font'}
  {shadow ? 'text-shadow' : ''}
  {size != null ? size : ''}"
  style="{weight ? `font-weight: ${weight}` : ''}">
  <slot />
</div>

<style>
  .bold {
    font-weight: 600;
  }
  .text-shadow {
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 1));
  }
  .prim-font {
    font-family: var(--primary-font);
  }
  .second-font {
    font-family: var(--secondary-font);
  }
  .M {
    font-size: 1.5em;
  }
  .S {
    font-size: 1.25em;
  }
  .XS {
    font-size: 1em;
  }
  .L {
    font-size: 1.75em;
  }
</style>
