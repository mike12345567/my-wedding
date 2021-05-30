<script>
  import { Heading, Transition, Layout, Text, Form } from "../components"
  import config from "../common/config"
</script>

<Transition>
  <Form center>
    <Layout justifyItems="center">
      <Heading>Gifts</Heading>
      <div class="mainText">
        <Text>
          {config.getGiftInfo()}
        </Text>
      </div>
    </Layout>
  </Form>
</Transition>

<style>
  .mainText {
    color: var(--text-color);
    text-align: center;
    padding: 0 30px 0 30px;
  }
</style>
