<script>
  import { config } from "./common/config"
  import { Router, Route } from "svelte-routing"
  import { Main, Gifts, Rsvp, Schedule, Venue, Login } from "./pages"
  import { Header } from "./components"

  const date = config.getDate()
  const ukDate = new Date(config.getDate()).toString()
  const colors = config.getColors()

  export let url = window.location.pathname
  export let loggedIn = true
</script>

{@html
  `<style>
    @font-face {
      font-family: ${config.getPrimaryFont().name};
      src: url(${config.getPrimaryFont().url});
    }
    @font-face {
      font-family: ${config.getSecondaryFont().name};
      src: url(${config.getSecondaryFont().url});
    }
  </style>`
}

<main
  style="--primary-color: {colors.primary};
 --text-color: {colors.text};
 --primary-font: {config.getPrimaryFont().name};
 --secondary-font: {config.getSecondaryFont().name}">
  <Router url="{url}">
    <Header loggedIn={loggedIn} />
    <div>
      {#if loggedIn}
        <Route path="" component="{Main}" />
        <Route path="site/venue" component="{Venue}" />
        <Route path="site/schedule" component="{Schedule}" />
        <Route path="site/gifts" component="{Gifts}" />
        <Route path="site/rsvp" component="{Rsvp}" />
      {:else}
        <Route path="" component="{Login}" />
      {/if}
    </div>
  </Router>
</main>

<style>
  :global(body) {
    background-color: var(--primary-color);
    margin-top: 0;
  }

  main {
    width: 100%;
    background-color: var(--primary-color);
    min-height: 100%;
  }

  main :global(a) {
    text-decoration: none;
  }

  main :global(a:hover) {
    font-weight: bold;
  }

  div {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>