import { writable } from "svelte/store"

export function createDataStore() {
  const store = writable({
    onMain: false,
  })
  return {
    subscribe: store.subscribe,
    setOnMain(onMain = true) {
      store.update(state => {
        state.onMain = onMain
        return state
      })
    },
  }
}

export default createDataStore()
