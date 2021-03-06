<script>
  import {
    Transition,
    Layout,
    Heading,
    Input,
    Select,
    Button,
    Text,
    Form,
  } from "../components"
  import config from "../common/config"
  import { validateEmail } from "../common/utils"
  import data from "../stores/data"
  import { success, failure } from "../common/toast"

  let guestNumber = 1
  let canAttend = "Yes"
  let cantAttendName
  let email = ""
  let phone = ""
  let lastEmail = ""
  let error = null
  let tempGuests
  let id = null

  $: guests = updateGuests(guestNumber, tempGuests)
  $: error = lastEmail !== email ? null : error
  $: disabled = !!error

  function updateGuests(count, foundGuests) {
    if (foundGuests) {
      tempGuests = null
      return foundGuests
    }
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
    return base
  }

  async function updateForm() {
    const rsvp = await data.getRsvp(email)
    if (rsvp && rsvp.guests && rsvp.guests.length >= 1) {
      id = rsvp.id
      phone = rsvp.phone || ""
      tempGuests = rsvp.guests
      guestNumber = tempGuests.length
    }
  }

  async function emailChanged() {
    lastEmail = email
    if (email && !validateEmail(email)) {
      error = "Invalid email address"
      return
    }
    await updateForm()
  }

  async function save() {
    let guestInput = guests
    if (canAttend === "No") {
      guestInput = {
        cantAttend: true,
        name: cantAttendName,
      }
    }
    try {
      await data.saveRsvp(email, phone, guestInput, id)
      success("RSVP has been sent!")
      await updateForm()
    } catch (err) {
      failure(err)
    }

  }
</script>

<Transition>
  <div class="outer">
    <Heading>RSVP</Heading>
  </div>
  <Form center>
    <div class="mainText">
      <Text>
        {config.getRSVP(false)[0]}
        <br />
        {config.getRSVP(false)[1]}
      </Text>
      <br />
      <Text bold>Meal Choices</Text>
      <Text>
        {#each config.getMeals() as meal}
          <b>{meal.type}</b> - {meal.details}<br />
        {/each}
      </Text>
    </div>
    <Input
      width="70%"
      label="Email"
      bind:value={email}
      on:change={emailChanged}
      bind:error
    />
    <Input
      width="70%"
      label="Phone number"
      bind:value={phone}
    />
    <Select
      width="70%"
      label="Can Attend?"
      bind:value={canAttend}
      options={["Yes", "No"]}
    />
    {#if canAttend === "Yes"}
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
    {:else}
      <Input width="70%" label="Name" bind:value={cantAttendName} />
    {/if}
    <div class="buttons">
      <div class="right">
        <Button width="200px" bind:disabled on:click={save}>Send RSVP</Button>
      </div>
    </div>
  </Form>
</Transition>

<style>
  .outer {
    width: 100%;
    color: var(--text-color);
    text-align: center;
  }

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
