<script>
  import Text from "./Text.svelte"
  export let primary = false
  export let size = "M"
</script>

<span class="{size}">
  <Text {primary}>
    <slot />
  </Text>
</span>

<style>
  span {
    font-weight: 100;
  }

  .S {
    font-size: 2em;
  }
  .M {
    font-size: 3em;
  }
  .L {
    font-size: 4em;
    line-height: 1.2;
  }

  span {

  }

  @media only screen and (max-width: 640px) {
    span {
      font-size: 1.5em;
      font-weight: 100;
    }
  }
</style>
