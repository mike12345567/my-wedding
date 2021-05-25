<script>
  export let gap = "M"
  export let noGap = false
  export let alignContent = "normal"
  export let justifyItems = "stretch"
  export let topPadding, bottomPadding

  const center = justifyItems === "center"
</script>

<div
  style="align-content:{alignContent};justify-items:{justifyItems};padding-top:{topPadding};padding-bottom:{bottomPadding}"
  class="layout-container gap-{!noGap && gap} {center ? 'center' : ''}"
>
  <slot />
</div>

<style>
  .layout-container {
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
  }
  .center {
    width: 100%;
  }
  .gap-XS {
    grid-gap: 0.5em;
  }
  .gap-S {
    grid-gap: 1em;
  }
  .gap-M {
    grid-gap: 1.5em;
  }
  .gap-L {
    grid-gap: 2em;
  }
  .horizontal.gap-S :global(*) + :global(*) {
    margin-left: 0.5em;
  }
  .horizontal.gap-M :global(*) + :global(*) {
    margin-left: 0.75em;
  }
  .horizontal.gap-L :global(*) + :global(*) {
    margin-left: 1em;
  }
</style>
