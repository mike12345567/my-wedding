<script>
  import { data } from "../stores"
  import { onMount } from "svelte"
  import { navigate } from "svelte-routing"

  let adminInfo

  onMount(async () => {
    try {
      adminInfo = await data.getAdminInfo()
    } catch (err) {
      navigate("/", { replace: true })
    }
  })
</script>
