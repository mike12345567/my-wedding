<script>
  import {
    Heading,
    SubHeading,
    Transition,
    Layout,
    Text,
    Button,
  } from "../components"
  import config from "../common/config"
  import { Images } from "../common/images"

  const hotelInfo = config.getHotelInfo(false)
</script>

<Transition>
  <div class="all">
    <Layout justifyItems="center">
      <div>
        <Heading>Venue</Heading>
        <Text size="S">{config.getVenueInfo()}</Text>
        <a href={config.getVenueLink()}>
          <Text size="S">Our Venue</Text>
        </a>
      </div>
      <div>
        <SubHeading primary>Hotels</SubHeading>
        {#each hotelInfo as hotel}
          <Text size="S">{hotel}</Text>
        {/each}
      </div>
      <div>
        <SubHeading primary>Directions</SubHeading>
        <Text size="S">{config.getDirections()}</Text>
      </div>
      <div>
        <SubHeading primary>Parking</SubHeading>
        <Text size="S">{config.getParkingInfo()}</Text>
      </div>
    </Layout>
    <div class="image">
      <img src={Images.VENUE_MED} alt="venue" />
    </div>
  </div>
</Transition>

<style>
  .all {
    color: var(--text-color);
    text-align: center;
    padding: 0 30px 0 30px;
    width: 50%;
    min-width: 360px;
    margin: auto;
  }

  .image {
    width: 140%;
    margin-left: -25%;
    margin-bottom: 10%;
  }

  .image img {
    max-width: 120%;
  }

  @media screen and (max-width: 500px) {
    .image {
      overflow: hidden;
      margin-left: -30%;
      width: 147%;
    }

    .image img {
      max-width: 110%;
      margin-bottom: -12%;
    }
  }
</style>
