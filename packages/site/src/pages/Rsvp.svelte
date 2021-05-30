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
  import { validateEmail } from "../common/utils"

  let guestNumber = 1
  let email = ""
  let guests
  let error = null
  let lastEmail = ""
  $: updateGuests(guestNumber)
  $: error = lastEmail !== email ? null : error
  $: disabled = !!error

  function updateGuests(count) {
    let base = guests
    if (!base) {
      base = [{}]
    }
    while (count !== base.length) {
      if (base.length > count) {
        base.pop()
      } else {
        base.push({})
      }
    }
    guests = [ ...base ]
  }

  function emailChanged() {
    lastEmail = email
    if (email && !validateEmail(email)) {
      error = "Invalid email address"
      return
    }
    // TODO: check if they've already responded
  }

  async function saveRSVP() {
    console.log(guests)
  }
</script>

<Transition>
  <Form center topPadding="80px">
    <SubHeading primary>RSVP</SubHeading>
    <div class="mainText">
      <Text>
        {config.getRSVP1()}
        <br>
        {config.getRSVP2()}
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
    <Input width="70%" label="Email" bind:value={email} on:change={emailChanged} bind:error />
    <Select
      width="70%"
      label="Number of guests"
      bind:value={guestNumber}
      options={[1, 2, 3, 4, 5, 6]}
    />
    {#if guestNumber}
      <div class="guestSection">
        <Layout gap="S" justifyItems="center">
          {#each guests as guest}
            <div class="guest">
              <Text bold>Guest {guests.indexOf(guest) + 1}</Text>
              <Input width="100%" label="Name" bind:value={guest.name} />
              <div class="bottomLine">
                <Select
                  width="180px"
                  label="Meal"
                  bind:value={guest.choice}
                  options={["Meat", "Veg"]}
                />
                <div class="diet">
                  <Input label="Dietary notes" bind:value={guest.dietary} />
                </div>
              </div>
            </div>
          {/each}
        </Layout>
      </div>
    {/if}
    <div class="buttons">
      <div class="right">
        <Button width="200px" bind:disabled on:click={saveRSVP}>Send RSVP</Button>
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

  .diet {
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
