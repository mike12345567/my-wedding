<script>
  import {
    Heading,
    Transition,
    Layout,
    Text,
    Button,
    LabeledImage,
  } from "../components"
  import config from "../common/config"
</script>

<Transition>
  <div class="all">
    <Layout justifyItems="center">
      <div class="mainText">
        <Heading>Gifts</Heading>
        <Text size="S">
          {config.getGiftInfo()}
        </Text>
      </div>
      <a href={config.getGiftLink()}>
        <Button width="300px"
          ><Text size="S">Give a gift via Honeyfund</Text></Button
        >
      </a>
    </Layout>
  </div>
  <Layout justifyItems="center">
    <div class="images">
      <LabeledImage margin="10px" imageName="glong" />
      <LabeledImage margin="10px" imageName="gcloseup" />
    </div>
  </Layout>
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

  a {
    font-weight: bold;
  }

  .images {
    display: flex;
    width: 60%;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 1024px) {
    .images {
      flex-direction: column;
      width: 80%;
    }
  }
</style>
