<script>
  import { config } from "./common/config"
  import { Router, Route } from "svelte-routing"
  import { Main, Gifts, Rsvp, Schedule, Venue } from "./pages"
  import { Header } from "./components"

  const date = config.getDate()
  const ukDate = new Date(config.getDate()).toString()
  const colors = config.getColors()

  export let url = window.location.pathname
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
    <Header />
    <div>
      <Route path="" component="{Main}" />
      <Route path="site/venue" component="{Venue}" />
      <Route path="site/schedule" component="{Schedule}" />
      <Route path="site/gifts" component="{Gifts}" />
      <Route path="site/rsvp" component="{Rsvp}" />
    </div>
  </Router>
</main>

<style>
  main {
    width: 100%;
    background-color: var(--primary-color);
    min-height: 100%;
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