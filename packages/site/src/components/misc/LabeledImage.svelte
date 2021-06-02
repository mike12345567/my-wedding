<script>
  import { Text } from "../"
  import config from "../../common/config"

  export let imageName = ""
  export let size = null
  export let margin = null
  $: url = config.getImageUrl(imageName)
  $: label = config.getImageLabel(imageName)
</script>

<div style={margin ? `margin: ${margin}` : ""}>
  <Text size="XS">{label}</Text>
  <img style={size ? `width: ${size}` : ""} src={url} alt={label} />
</div>

<style>
  div {
    text-align: center;
    color: var(--text-color);
  }

  div img {
    border-radius: 15px;
  }
</style>
