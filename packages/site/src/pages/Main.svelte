<script>
  import config from "../common/config"
  import { getTimeUntil, formatDate } from "../common/date"
  import { Images } from "../common/images"
  import { Link } from "svelte-routing"
  import {
    Button,
    Heading,
    SubHeading,
    Text,
    Layout,
    Transition,
    DownArrow,
  } from "../components"

  const date = config.getDate()
  const ukDate = new Date(config.getDate()).toString()
  const colors = config.getColors()

  $: daysUntil = date ? getTimeUntil(date) : "No date provided"
</script>

<Transition>
  <div class="body">
    <div class="left">
      <div class="image" style="background-image: url('{Images.US}')" />
      <div class="heading">
        <Heading shadow>
          {config.getHerName()} & {config.getHisName()}
        </Heading>
        <Text size="M" shadow weight="600">
          We can't wait to share our big day with you.
        </Text>
        <div class="arrow">
          <DownArrow size="50px" />
        </div>
      </div>
    </div>
    <div class="right">
      <img class="logo" src={Images.LOGO} alt="floral heart" />
      <div class="content">
        <Layout gap="M" justifyItems="center">
          <SubHeading primary size="L">
            {config.getAddress().name}, {config.getAddress().town}
          </SubHeading>
          <Text size="L">
            {formatDate(date, "dddd, Do MMMM, YYYY")}
          </Text>
          <Link to="site/rsvp">
            <Button width="220px">Respond Here</Button>
          </Link>
        </Layout>
      </div>
      <div class="corner">
        <img src={Images.CORNER} alt="corner" />
      </div>
    </div>
  </div>
</Transition>

<style>
  :global(.header img) {
    display: none;
  }

  .body {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    display: flex; flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    overflow-x: hidden;
  }

  .left, .right {
    position: relative;
    height: 100%;
  }

  .left {
    flex: 1 1 auto;
    filter: grayscale(70%);
  }

  .image {
    margin-top: -100px;
    height: calc(100% + 100px);
    width: 100%;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .right {
    flex: 0 0 30%;
    min-width: 480px;
    text-align: center;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
      z-index: 1;
  }

  .logo {
    position: absolute;
    top: 30px;
    right: 30px;
    height: 120px;
  }


  .heading {
    position: absolute;
    z-index: 1;
    bottom: 3em;
    color: white;
    text-align: center;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    padding: 40px;
  }

  .content {
      z-index: 1;
  }
  .corner {
    position: absolute;
    bottom: 0;
    right: 0;
    filter: grayscale(10%);
    z-index: 0;
  }

  .corner img {
    transform-origin: bottom right;
    height: 300px;
  }

  .arrow {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .body {
      flex-direction: column;
    }

    .left {
      flex: 0 0 100vh;
    }

    .right {
      flex: 0 0 100vh;
      min-width: 0;
    }

    .corner img {
      transform-origin: bottom right;
    }

    .arrow {
      display: block;
      width: 100%;
      margin-top: 40px;
    }
  }
</style>
