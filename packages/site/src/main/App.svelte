<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
</svelte:head>

<script>
  import { getTimeUntil } from "../common/date"
  export let hisName
  export let herName
  export let date
  export let address
  export let color

  $: daysUntil = date ? getTimeUntil(date) : "No date provided"
</script>

<main style="--primary-color: {color.primary}; --text-color: {color.text}">
  <div class="body">
    <h1>{herName} & {hisName} are getting married!</h1>
    <h3>Its happening at {address.name} in {address.town}</h3>
    <p>{daysUntil} until the big day</p>
  </div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    color: var(--text-color);
  }

  .body {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
