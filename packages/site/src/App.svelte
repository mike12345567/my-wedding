<script>
  import config from "./common/config"
  import { Router, Route, navigate } from "svelte-routing"
  import { Main, Gifts, Rsvp, TheDay, Venue, Login, Admin } from "./pages"
  import { Header } from "./components"
  import { auth } from "./stores"
  import { onMount, setContext } from "svelte"
  import { writable } from "svelte/store"
  import { SvelteToast } from "@zerodevx/svelte-toast"

  const date = config.getDate()
  const ukDate = new Date(config.getDate()).toString()
  const colors = config.getColors()

  export let url = window.location.pathname

  $: checkPath($auth.loggedIn)

  setContext("header", new writable({ open: false }))

  function checkPath(loggedIn) {
    if (loggedIn === false) {
      navigate("/")
      console.log("NAVIGATING!")
    }
  }

  onMount(async () => {
    await auth.self()
  })
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
    body {
      background-color: {colors.primary};
    }
  </style>`
}

<main
  style="--primary-color: {colors.primary};
 --text-color: {colors.text};
 --primary-font: {config.getPrimaryFont().name};
 --secondary-font: {config.getSecondaryFont().name};
 --accent-color: {colors.accent};">
  <SvelteToast />
  <Router url="{url}">
    <div>
      <Header loggedIn={$auth.loggedIn} />
      {#if $auth.loggedIn}
        <Route path="" component="{Main}" />
        <Route path="site/venue" component="{Venue}" />
        <Route path="site/theday" component="{TheDay}" />
        <Route path="site/gifts" component="{Gifts}" />
        <Route path="site/rsvp" component="{Rsvp}" />
      {:else}
        <Route path="" component="{Login}" />
      {/if}
      {#if $auth.loggedIn && $auth.user?.admin}
        <Route path="site/admin" component="{Admin}" />
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