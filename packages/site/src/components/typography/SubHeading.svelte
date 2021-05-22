<script>
  import Text from "./Text.svelte"
  export let primary = false
</script>

<span>
  <Text primary={primary}>
    <slot />
  </Text>
</span>

<style>
  span {
    font-size: 2.5em;
    font-weight: 100;
  }

  @media only screen and (max-width: 640px) {
    span {
      font-size: 1.5em;
      font-weight: 100;
    }
  }
</style>