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

<aside class="absolute w-full h-full" class:open>
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
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
    left: -100%;
    transition: left 0.3s ease-in-out;
    width: 400px;
    background-color: var(--primary-color);
    color: var(--text-color);
    border-style: none solid;
    border-width: 0 2px;
    border-color: var(--text-color);
    border-radius: 0 10px 10px 0;
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
      border-radius: 0;
      border: none;
    }
  }
</style>
