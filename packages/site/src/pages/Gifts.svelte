<script>
  import { Heading, Transition, Layout, Text, Form } from "../components"
  import config from "../common/config"
</script>

<Transition>
  <Layout justifyItems="center">
    <div class="mainText">
    <Heading>Gifts</Heading>
      <Text>
        {config.getGiftInfo()}
      </Text>
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
</style>
