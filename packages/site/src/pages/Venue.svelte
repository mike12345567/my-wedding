<script>
  import { Heading, Transition, Layout, Text } from "../components"
  import config from "../common/config"

  const hotelInfo = config.getHotelInfo(false)
</script>

<Transition>
  <div>
    <Layout justifyItems="center">
      <div class="mainText">
        <Heading>Venue</Heading>
        <Text>{config.getVenueInfo()}</Text>
        {#each hotelInfo as hotel}
          <Text>{hotel}</Text>
        {/each}
      </div>
    </Layout>
  </div>
</Transition>

<style>
  .mainText {
    color: var(--text-color);
    text-align: center;
    padding: 0 30px 0 30px;
    width: 50%;
    min-width: 360px;
  }
</style>

