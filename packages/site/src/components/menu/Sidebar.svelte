<script>
  import { Layout } from "../"
  import { Link } from "svelte-routing"

  export let open = false
</script>

<aside class="absolute w-full h-full border-r-2 shadow-lg" class:open>
  <nav class="p-16 text-xl">
    <Layout gap="XS" topPadding="10px">
      <Link to=""><p>Home</p></Link>
      <Link to="site/venue"><p>Venue</p></Link>
      <Link to="site/schedule"><p>Schedule</p></Link>
      <Link to="site/gifts"><p>Gifts</p></Link>
      <Link to="site/rsvp"><p>RSVP</p></Link>
    </Layout>
  </nav>
</aside>

<style>
  aside {
    left: -100%;
    transition: left 0.3s ease-in-out;
    width: 400px;
    background-color: var(--primary-color);
    color: var(--text-color);
  }

  p {
    color: var(--text-color);
  }

  .open {
    z-index: 10;
    left: 0;
  }

  @media only screen and (max-width: 640px) {
    aside {
      width: 100%;
    }
  }
</style>
