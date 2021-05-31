<script>
  import { Heading, Transition, Layout, Text } from "../components"
  import config from "../common/config"
</script>

<Transition>
  <div>
    <Layout justifyItems="center">
      <Heading>Schedule</Heading>
      <Text>When full details are known they will be found here.</Text>
    </Layout>
  </div>
</Transition>

<style>
  div {
    width: 100%;
    color: var(--text-color);
  }
</style>
