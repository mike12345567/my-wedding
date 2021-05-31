<script>
  import { SubHeading } from "../components"
  import { data } from "../stores"
  import { onMount } from "svelte"
  import { navigate } from "svelte-routing"
  import Table from "svelte-table"

  let adminInfo
  $: rows = getRows(adminInfo)
  const columns = [
    {
      key: "email",
      title: "Email",
      value: v => v.email,
      sortable: true,
    },
    {
      key: "name",
      title: "Name",
      value: v => v.name,
      sortable: true,
    },
    {
      key: "dietary",
      title: "Dietary requirements",
      value: v => v.dietary,
      sortable: true,
    },
    {
      key: "choice",
      title: "Meal choice",
      value: v => v.choice,
      sortable: true,
    }
  ];

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
    <Table columns="{columns}" rows="{rows}" />
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
    padding: 20px;
    margin: auto;
    display: block;
    width: 80%;
    border: solid var(--text-color) 3px;
    border-radius: 10px;
  }
</style>