<script>
  import { Sidebar, Hamburger } from "../"
  import { Images } from "../../common/images"
  import { data } from "../../stores"
  import { getContext, onMount } from "svelte"

  export let loggedIn
  const state = getContext("header")
  $: state.set({ open })
  onMount(() => state.set({ open: false }))
</script>

{#if loggedIn}
  <Sidebar bind:open={$state.open} />
  <div class="spacing"></div>
  <div class="hamburger">
    <Hamburger bind:open={$state.open} />
  </div>
{/if}
{#if !$data.onMain}
  <div class="header">
    <img src={Images.LOGO} height="100%" alt="floral heart" />
  </div>
{/if}

<style>
  :global(body) {
    padding: 0;
  }

  .spacing {
    padding-bottom: 100px;
  }

  .hamburger {
    position: fixed;
    z-index: 1000;
    top: 35px;
    left: 35px;
  }

  .header {
    position: absolute;
    right: 0;
    top: 0;
  }

  .header img {
    width: 128px;
    margin-right: 40px;
    margin-top: 30px;
  }

  @media only screen and (max-width: 640px) {
    .header img {
      margin-left: 0;
      float: none;
      margin-right: 20px;
      margin-top: 15px;
    }

    .spacing {
      padding-bottom: 125px;
    }

    .hamburger {
      left: 20px;
      top: 20px;
    }
  }
</style>
