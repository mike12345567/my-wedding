<script>
  import { config } from "../common/config"
  import { getTimeUntil, formatDate } from "../common/date"
  import { Images } from "../common/images"
  import {
    Button,
    Heading,
    SubHeading,
    Text,
    Layout,
    Transition,
  } from "../components"

  const date = config.getDate()
  const ukDate = new Date(config.getDate()).toString()
  const colors = config.getColors()

  $: daysUntil = date ? getTimeUntil(date) : "No date provided"
</script>

<Transition>
  <div class="body">
    <div class="heading">
      <Heading shadow>
        {config.getHerName()} & {config.getHisName()}
      </Heading>
      <Text size="M" shadow weight="600">
        We can't wait to share our big day with you.
      </Text>
    </div>
    <div class="left">
      <img src={Images.US} width="100%" alt="us" />
    </div>
  </div>
  <div class="right">
    <Layout gap="M" justifyItems="center">
      <SubHeading>
        {config.getAddress().name}, {config.getAddress().town}
      </SubHeading>
      <Text size="L">
        {formatDate(date, "dddd, Do MMMM, YYYY")}
      </Text>
      <Button width="40%">Respond Here</Button>
    </Layout>
  </div>
  <div class="corner">
    <img src={Images.CORNER} alt="corner" />
  </div>
</Transition>

<style>
  .body {
    padding: 1em;
    margin: 0 auto;
    overflow: hidden;
  }

  .left {
    position: absolute;
    filter: grayscale(70%);
    height: 100%;
    left: -20%;
    bottom: 0;
    width: 80%;
  }

  .right {
    position: absolute;
    right: 6%;
    top: 50%;
    transform: translateY(-50%);
    width: 30%;
    text-align: center;
    color: var(--text-color);
  }

  .heading {
    left: 4em;
    position: absolute;
    z-index: 1;
    bottom: 3em;
    color: white;
    text-align: left;
  }

  .corner {
    position: absolute;
    bottom: 0;
    right: 0;
    filter: grayscale(10%);
  }

  .corner img {
    transform-origin: bottom right;
    height: 300px;
  }
</style>
