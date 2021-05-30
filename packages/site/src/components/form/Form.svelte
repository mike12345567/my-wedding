<script>
  import Layout from "../misc/Layout.svelte"
  export let center = false
  export let topPadding
</script>

<div class:center style="{topPadding ? `padding-top: ${topPadding}` : ''}">
  <div class="border">
    <Layout justifyItems="center" topPadding="20px" bottomPadding="30px">
      <slot />
    </Layout>
  </div>
</div>

<style>
  .border {
    border-radius: 15px;
    border: 4px solid var(--text-color);
    width: 45%;
    height: auto;
    min-width: 360px;
  }

  .center {
    width: 100%;
    padding-bottom: 100px;
    color: var(--text-color);
    display: grid;
    justify-items: center;
  }
</style>