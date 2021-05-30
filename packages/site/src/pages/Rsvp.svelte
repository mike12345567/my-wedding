<script>
  import {
    Transition,
    Layout,
    SubHeading,
    Input,
    Select,
    Button,
    Text,
    Form,
  } from "../components"
  import config from "../common/config"

  let guestNumber = 1
  let email
</script>

<Transition>
  <Form center topPadding="80px">
    <SubHeading primary>RSVP</SubHeading>
    <div class="mainText">
      <Text>
        {config.getRSVP()}
      </Text>
      <br>
      <Text bold>
        Meal Choices
      </Text>
      <Text>
        {#each config.getMeals() as meal}
          <b>{meal.type}</b> - {meal.details}<br>
        {/each}
      </Text>
    </div>
    <Input width="70%" label="Email" bind:value={email} />
    <Select
      width="70%"
      label="Number of guests"
      bind:value={guestNumber}
      options={[1, 2, 3, 4, 5, 6]}
    />
    {#if guestNumber}
      <div class="guestSection">
        <Layout gap="S" justifyItems="center">
          {#each [...Array(guestNumber).keys()] as number}
            <div class="guest">
              <Text weight="600">Guest {number + 1}</Text>
              <div class="name">
                <Input width="100%" label="Name" />
              </div>
              <div class="bottomLine">
                <Select
                  width="180px"
                  label="Meal"
                  options={["Meat", "Veg"]}
                />
                <Input label="Dietary notes" />
              </div>
            </div>
          {/each}
        </Layout>
      </div>
    {/if}
    <div class="buttons">
      <div class="right">
        <Button width="200px">Send RSVP</Button>
      </div>
    </div>
  </Form>
</Transition>

<style>
  .mainText {
    padding: 0 40px 0 40px;
    text-align: center;
  }

  .guestSection {
    margin-top: 10px;
    padding: 18px;
    background-color: var(--text-color);
    color: var(--primary-color);
    width: 100%;
    display: flex;
  }

  .name {
    flex-grow: 2;
  }

  .guest {
    width: 80%;
  }

  .bottomLine {
    display: flex;
    gap: 20px;
  }

  .buttons {
    width: 100%;
    display: flex;
    margin-top: 20px;
  }

  .right {
    margin-left: auto;
    order: 2;
    margin-right: 30px;
  }
</style>
