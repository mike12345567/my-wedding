<script>
  import { Heading, SubHeading } from "../components"
  import { data } from "../stores"
  import { onMount } from "svelte"
  import { navigate } from "svelte-routing"
  import DataTable from "@fouita/data-table"

  let adminInfo
  $: rows = getRows(adminInfo)
  const head = {
    attend: "Attending",
    email: "Email",
    phone: "Number",
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
      const email = (info.email || "").toLowerCase()
      const phone = info.phone || ""
      if (info?.guests?.cantAttend) {
        // cant attend, just add their name
        rows.push({ email, name: info.guests.name, attend: "No" })
      } else {
        // they can attend, add the guests
        for (let guest of info?.guests) {
          rows.push({ email, phone, ...guest, attend: "Yes" })
        }
      }
    }
    return rows.sort((a, b) => {
      if (a.email < b.email) {
        return -1
      }
      if (a.email < b.email) {
        return 1
      }
      return 0
    })
  }
</script>

<div class="outer">
  <SubHeading primary>Administration</SubHeading>
  <SubHeading size="XS">Total: {rows.length}</SubHeading>
  <div class="inner">
    <DataTable {head} {rows} />
  </div>
</div>

<style>
  .outer {
    width: 100%;
    margin-top: 20px;
    text-align: center;
    color: var(--text-color);
    padding-bottom: 200px;
  }
  .inner {
    margin: auto;
    display: block;
    width: 80%;
    border: solid var(--text-color) 3px;
    border-radius: 5px;
  }
</style>
