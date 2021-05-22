<script>
  import Text from "./Text.svelte"
  export let primary = false
</script>

<span>
  <Text {primary}>
    <slot />
  </Text>
</span>

<style>
  span {
    font-size: 3em;
    font-weight: 100;
  }

  @media only screen and (max-width: 640px) {
    span {
      font-size: 1.5em;
      font-weight: 100;
    }
  }
</style>
