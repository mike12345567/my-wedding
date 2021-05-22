<script>
  export let primary = false
  export let size = "M"
</script>

<div class='{ primary ? "prim-font" : "second-font" } { size === "M" ? "m" : size === "S" ? "s" : "l" }'>
  <slot />
</div>

<style>
  .prim-font {
    font-family: var(--primary-font);
  }

  .second-font {
    font-family: var(--secondary-font);
  }

  .m { font-size: 1em }

  .s { font-size: 0.5em }

  .l { font-size: 1.5em }
</style>