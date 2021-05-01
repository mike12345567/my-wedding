<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
</svelte:head>

<script>
  import { config } from "../common/config"
  import { getTimeUntil } from "../common/date"
  import { Images } from "../common/images"

  const date = config.getDate()
  const colors = config.getColors()

  $: daysUntil = date ? getTimeUntil(date) : "No date provided"
</script>

<main style="--primary-color: {colors.primary}; --text-color: {colors.text}">
  <div class="body">
    <div class="header">
      <img src="{Images.LOGO}" height="100%" alt="floral heart">
    </div>
    <div class="textWrapper">
      <h1>{config.getHerName()} & {config.getHisName()} are getting married!</h1>
      <h3>Its happening at {config.getAddress().name} in {config.getAddress().town}</h3>
      <p>{daysUntil} until the big day</p>
    </div>
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

  .header {
    width: 100%;
    height: 10%;
  }

  .header img {
    left: 0;
    width: 128px;
    margin-left: 30px;
    margin-top: 10px;
    float: left;
  }

  .textWrapper {
    top: 30%;
    width: 40%;
    left: 50%;
    transform: translate(-50%,0);
    position: absolute;
    z-index: 1;
  }
</style>
