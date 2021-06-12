<script>
  import { Heading, Transition, Layout, Text, SubHeading } from "../components"
  import config from "../common/config"
  import { getCombinedParty, getUshers } from "../common/party"

  $: party = getCombinedParty(false)
  $: ushers = getUshers()
</script>

<Transition>
  <div class="all">
    <Layout justifyItems="center">
        <div>
          <Heading>On the day</Heading>
          <SubHeading primary>Schedule</SubHeading>
          <Text size="S">{config.getDayInfo()}</Text>
        </div>
        <Layout gap="XS" justifyItems="center">
          <Text size="S">Guests arriving at: <b>{config.getArrival()}</b></Text>
          <Text size="S">Ceremony starts at: <b>{config.getCeremonyStart()}</b></Text>
          <Text size="S">Canapes served at: <b>{config.getCanapesStart()}</b></Text>
          <Text size="S">Speeches start at: <b>{config.getSpeechesStart()}</b></Text>
          <Text size="S">Dinner served at: <b>{config.getDinnerStart()}</b></Text>
        </Layout>
        <div>
          <SubHeading primary>Wedding Party</SubHeading>
          <Text size="S">
            We want to thank everyone who is able to join us on our big day and
            here we want to pay special thanks to those people that have helped
            us make this a reality!
          </Text>
        </div>
        <div class="party">
          {#each party as member}
            {#if member}
              <div>
                <SubHeading size="S" primary>{member.title}</SubHeading>
                <Text size="S">{member.name}</Text>
              </div>
            {:else}
              <!-- spacer -->
              <div>
                <br>
                <br>
              </div>
            {/if}
          {/each}
        </div>
        <!-- space ushers separately in the center -->
        {#if ushers}
          <div class="ushers">
            <div>
              <SubHeading size="S" primary>{ushers.title}</SubHeading>
              <Text size="S">{ushers.name}</Text>
            </div>
          </div>
        {/if}
    </Layout>
  </div>
</Transition>

<style>
  .all {
    color: var(--text-color);
    text-align: center;
    padding: 0 30px 100px 30px;
    width: 50%;
    min-width: 360px;
    margin: auto;
  }

  .party {
    margin-left: 0;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 20px;
  }

  .ushers {

  }
</style>
