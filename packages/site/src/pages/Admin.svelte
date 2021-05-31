<script>
  import { SubHeading } from "../components"
  import { data } from "../stores"
  import { onMount } from "svelte"
  import { navigate } from "svelte-routing"
  import DataTable from "@fouita/data-table"

  let adminInfo
  $: rows = getRows(adminInfo)
  const head = {
    email: "Email",
    name: "Name",
    dietary: "Dietary req",
    choice: "Meal",
  }

  onMount(async () => {
    try {
      adminInfo = await data.getAdminInfo()

    } catch (err) {
      navigate("/", { replace: true })
    }
  })
  function getRows(fullInfo) {
    const rows = []
    if (!fullInfo) {
      return rows
    }
    for (let info of fullInfo) {
      const email = info.email
      for (let guest of info?.guests) {
        rows.push({ email, ...guest })
      }
    }
    return rows
  }
</script>

<div class="outer">
  <SubHeading>Administration</SubHeading>
  <div class="inner">
    <DataTable {head} {rows} />
  </div>
</div>

<style>
  .outer {
    width: 100%;
    margin-top: 100px;
    text-align: center;
    color: var(--text-color);
  }
  .inner {
    margin: auto;
    display: block;
    width: 80%;
    border: solid var(--text-color) 3px;
    border-radius: 5px;
  }
</style>