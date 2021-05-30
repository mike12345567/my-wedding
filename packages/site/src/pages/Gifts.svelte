<script>
  import { Heading, Transition, Layout, Text } from "../components"
  import config from "../common/config"
</script>

<Transition>
  <Layout justifyItems="center">
    <div>
      <Heading>Gifts</Heading>
      <Text>
        {config.getGiftInfo()}
      </Text>
    </div>
  </Layout>
</Transition>

<style>
  div {
    color: var(--text-color);
  }
</style>
