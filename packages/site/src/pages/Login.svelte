<script>
  import {
    Transition,
    SubHeading,
    Input,
    Button,
    Text,
    Form,
  } from "../components"
  import { auth } from "../stores"
  import { failure } from "../common/toast"
  import { navigate } from "svelte-routing"

  let password
  let error
  $: disabled = !password

  async function login() {
    try {
      await auth.login(password)
      navigate("/", { replace: true })
    } catch (err) {
      failure("Unable to login, please try re-entering password")
    }
  }
</script>

<Transition>
  <Form center topPadding="200px">
    <SubHeading primary>Login</SubHeading>
    <div class="mainText">
      <Text>Please use the password provided on your invitation to login.</Text>
    </div>
    <Input label="Password" width="60%" on:enter={login} bind:value={password} />
    <div class="buttons">
      <div class="right">
        <Button width="200px" bind:disabled on:click={login}>Login</Button>
      </div>
    </div>
  </Form>
</Transition>

<style>
  .mainText {
    padding: 0 40px 0 40px;
    text-align: center;
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
