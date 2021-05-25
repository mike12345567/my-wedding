<script>
  import { Transition, Layout, SubHeading, Input, Select, Button, Text } from "../components"

  let guestNumber = 1
  let email

  $: console.log(guestNumber)
</script>

<Transition>
  <div class="center">
    <div class="border">
      <Layout justifyItems="center" topPadding="20px" bottomPadding="30px">
        <SubHeading primary>
          RSVP
        </SubHeading>
        <div class="mainText">
          <Text>
            We can't wait to share our big day with you! If you could please let
            us know the names, meal choices and dietary needs of those invited (including plus ones if mentioned).
            If have a specific need/request or want to change a response that you've
            already sent please reach out to us 😊
          </Text>
        </div>
        <Input label="email" bind:value={email} />
        <Select label="Number of guests" bind:value={guestNumber} options={[1, 2, 3, 4, 5, 6]} />
          {#if guestNumber}
            <div class="guestSection">
              <Layout gap="S" justifyItems="center">
                {#each [...Array(guestNumber).keys()] as number}
                  <div class="guest">
                    <Text weight="600">Guest {number + 1}</Text>
                    <div class="topLine">
                      <div class="name">
                        <Input width="100%" label="Name" />
                      </div>
                      <Select width="100px" label="Meal" options={["Meat", "Veg"]} />
                    </div>
                    <Input label="Dietary requirements" />
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
      </Layout>
    </div>
  </div>
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

  .topLine {
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

  .border {
    border-radius: 15px;
    border: 4px solid var(--text-color);
    width: 35%;
    height: auto;
    min-width: 360px;
    max-width: 640px;
  }

  .center {
    width: 100%;
    margin-top: 80px;
    padding-bottom: 100px;
    color: var(--text-color);
    display: grid;
    justify-items:center;
  }
</style>
