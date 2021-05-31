<script>
  import { Heading, Transition, Layout, Text, Button, LabeledImage } from "../components"
  import config from "../common/config"
</script>

<Transition>
  <Layout justifyItems="center">
    <div class="mainText">
      <Heading>Gifts</Heading>
      <Text size="S">
        {config.getGiftInfo()}
      </Text>
    </div>
    <a href="{config.getGiftLink()}">
      <Button width="180px">Gift site</Button>
    </a>
    <div class="images">
      <LabeledImage margin="10px" imageName="glong" />
      <LabeledImage margin="10px" imageName="gcloseup" />
    </div>
  </Layout>
</Transition>

<style>
  .mainText {
    color: var(--text-color);
    text-align: center;
    padding: 0 30px 0 30px;
    width: 50%;
    min-width: 360px;
  }

  a {
    font-weight: bold;
  }

  .images {
    display: flex;
    width: 60%;
  }

  @media screen and (max-width: 1024px) {
    .images {
      flex-direction: column;
      width: 80%;
    }
  }
</style>
