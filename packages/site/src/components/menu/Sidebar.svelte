<script>
  import { Layout } from "../"
  import { Link } from "svelte-routing"

  export let open = false

  let links = [
    {to: "", text: "Home"},
    {to: "site/venue", text: "Venue"},
    {to: "site/schedule", text: "Schedule"},
    {to: "site/gifts", text: "Gifts"},
    {to: "site/rsvp", text: "RSVP"},
  ]

  function linkClick() {
    open = false
  }
</script>

<aside class="absolute w-full h-full border-r-2 shadow-lg" class:open>
  <nav class="p-20 text-xl">
    <Layout gap="XS" topPadding="20px">
      {#each links as link}
        <Link to={link.to} on:click={linkClick}><p>{link.text}</p></Link>
      {/each}
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
