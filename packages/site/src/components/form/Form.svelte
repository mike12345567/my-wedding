<script>
  import Layout from "../misc/Layout.svelte"
  export let center = false
</script>

<div class:center>
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
    width: 35%;
    height: auto;
    min-width: 360px;
    max-width: 640px;
  }

  .center {
    width: 100%;
    margin-top: 80px;
    padding-bottom: 100px;
    color: var(--text-color);
    display: grid;
    justify-items: center;
  }
</style>