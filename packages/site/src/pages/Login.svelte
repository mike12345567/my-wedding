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

  let password
  let error
  $: disabled = !password

  async function login() {
    console.log("TRY LOGIN")
    await auth.login(password)
  }
</script>

<Transition>
  <Form center topPadding="200px">
    <SubHeading primary>Login</SubHeading>
    <div class="mainText">
      <Text>
        Please use the password provided on your invitation to login.
      </Text>
    </div>
    <Input type="password" label="Password" width="60%" bind:value={password} />
    <div class="buttons">
      <div class="right">
        <Button width="200px" bind:disabled={disabled} on:click={login}>Login</Button>
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
