<script>
  export let hisName
  export let herName
  export let address
  export let color
</script>

<main style="--primary-color: {color.primary}; --text-color: {color.text}">
  <div class="body">
    <h1>{herName} & {hisName} are gettin' married</h1>
    <h3>Its happening at {address.name} in {address.town}</h3>
  </div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    background-color: #FAD9D0;
    color: var(--text-color);
  }

  .body {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
