import App from "./main/App.svelte"
import main from "../config/mine.json"

const app = new App({
  target: document.body,
  props: main,
})

export default app
