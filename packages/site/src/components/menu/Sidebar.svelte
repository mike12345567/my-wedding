<script>
  import {
    Layout,
  } from "../"

  export let open = false
</script>

<aside class="absolute w-full h-full border-r-2 shadow-lg" class:open>
  <nav class="p-16 text-xl">
    <div>
    <Layout gap="XS" topPadding="10px">
      <a class="block" href="#About">About</a>
      <a class="block" href="#venue">Venue</a>
      <a class="block" href="#schedule">Schedule</a>
      <a class="block" href="#gifts">Gifts</a>
    </Layout>
  </nav>
</aside>

<style>
  aside {
    left: -100%;
    transition: left 0.3s ease-in-out;
    width: 30%;
    background-color: var(--primary-color);
    color: var(--text-color);
  }

  a {
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
