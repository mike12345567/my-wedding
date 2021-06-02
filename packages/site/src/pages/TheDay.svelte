<script>
  import { Heading, Transition, Layout, Text, SubHeading } from "../components"
  import config from "../common/config"

  $: party = getParty()

  function getParty() {
    const arr = []
    const chief = config.getChiefBridesmaid(),
      bestman = config.getBestMan(),
      groomsmen = config.getGroomsmen(),
      bridesmaids = config.getBridesmaids(),
      ushers = config.getUshers(),
      fatherBride = config.getFatherOfBride(),
      motherBride = config.getMotherOfBride(),
      motherGroom = config.getMotherOfGroom(),
      fatherGroom = config.getFatherOfGroom(),
      stepFatherGroom = config.getStepFatherOfGroom()
    if (chief) {
      arr.push({ title: "Chief bridesmaid", name: chief })
    }
    if (bestman) {
      arr.push({ title: "Best man", name: bestman })
    }
    if (groomsmen) {
      arr.push({ title: "Groomsmen", name: groomsmen })
    }
    if (bridesmaids) {
      arr.push({ title: "Bridesmaids", name: bridesmaids })
    }
    if (ushers) {
      arr.push({ title: "Ushers", name: ushers })
    }
    if (fatherBride) {
      arr.push({ title: "Father of bride", name: fatherBride })
    }
    if (motherBride) {
      arr.push({ title: "Mother of bride", name: motherBride })
    }
    if (motherGroom) {
      arr.push({ title: "Mother of groom", name: motherGroom })
    }
    if (stepFatherGroom) {
      arr.push({ title: "Step father of groom", name: stepFatherGroom })
    }
    if (fatherGroom) {
      arr.push({ title: "Father of groom", name: fatherGroom })
    }
    return arr
  }
</script>

<Transition>
  <div class="all">
    <Layout justifyItems="center">
        <div>
          <Heading>On the day</Heading>
          <SubHeading primary>Schedule</SubHeading>
          <Text>{config.getDayInfo()}</Text>
          <SubHeading primary>Wedding Party</SubHeading>
        </div>
        <Text>
          We want to thank everyone who is able to join us on our big day and
          here we want to pay special thanks to those people that have helped
          us make this a reality!
        </Text>
        <div class="party">
          {#each party as member}
            <div>
              <SubHeading size="S" primary>{member.title}</SubHeading>
              <Text size="S">{member.name}</Text>
            </div>
          {/each}
        </div>
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
</style>
