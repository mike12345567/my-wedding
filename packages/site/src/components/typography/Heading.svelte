<script>
  import Text from "./Text.svelte"
  export let secondary = false
  export let shadow = false
</script>

<span>
  <Text primary={!secondary} {shadow}>
    <slot />
  </Text>
</span>

<style>
  span {
    font-size: 7em;
    font-weight: 100;
  }

  @media only screen and (max-width: 640px) {
    span {
      font-size: 3.5em;
      font-weight: 100;
    }
  }
</style>
