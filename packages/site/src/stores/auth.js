import { writable } from "svelte/store"
import api from "./api"

async function updateUser(store, response) {
  const json = await response.json()
  store.update(state => {
    state.user = json
    state.loggedIn = !!json
    state.admin = state.user?.admin
    return state
  })
  return json
}

export function createAuthStore() {
  const store = writable({
    user: null,
    loggedIn: null,
    admin: null,
  })
  return {
    subscribe: store.subscribe,
    self: async () => {
      const response = await api.get("/api/self")
      if (response.status !== 200) {
        throw "User not logged in."
      }
      return updateUser(store, response)
    },
    login: async password => {
      const response = await api.post("/api/login", { password })
      if (response.status !== 200) {
        throw "Wrong password, please try again."
      }
      return updateUser(store, response)
    },
  }
}

export default createAuthStore()
