<script>
  import { Sidebar, Hamburger } from "../"
  import { Images } from "../../common/images"

  let open = false
</script>

<Sidebar bind:open />
<div class="hamburger">
  <Hamburger bind:open />
</div>
<div class="header">
  <img src={Images.LOGO} height="100%" alt="floral heart" />
</div>

<style>
  :global(body) {
    padding: 0;
  }

  .hamburger {
    position: relative;
    z-index: 1000;
    margin-top: 20px;
    margin-left: 20px;
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
    }
  }
</style>
