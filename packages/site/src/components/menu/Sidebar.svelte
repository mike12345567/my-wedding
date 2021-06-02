<script>
  import { Layout, Text } from "../"
  import { Link } from "svelte-routing"
  import { auth } from "../../stores"

  export let open = false

  $: links = updateLinks($auth.user.admin)

  function linkClick() {
    open = false
  }

  function updateLinks(isAdmin) {
    const links = [
      { to: "", text: "Home" },
      { to: "site/venue", text: "Venue" },
      { to: "site/theday", text: "On the day" },
      { to: "site/gifts", text: "Gifts" },
      { to: "site/rsvp", text: "RSVP" },
    ]
    if (isAdmin) {
      links.push({ to: "site/admin", text: "Admin" })
    }
    return links
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
  <div class="createdBy">
    <Text size="XXS">
      <i>Created By</i>
      <br />
      Michael Drury and Andrew Kingston
    </Text>
  </div>
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
    z-index: 10;
  }

  p {
    color: var(--text-color);
  }

  .open {
    left: 0;
  }

  .createdBy {
    position: absolute;
    bottom: 18px;
    left: 20px;
  }

  @media only screen and (max-width: 640px) {
    aside {
      width: 100%;
      border-radius: 0;
      border: none;
      height: 100%;
    }
  }
</style>
