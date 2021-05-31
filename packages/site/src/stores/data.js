import { writable } from "svelte/store"
import api from "./api"

async function updateRsvp(store, response) {
  const json = await response.json()
  store.update(state => {
    state.rsvps = json
    return state
  })
  return json
}

export function createDataStore() {
  const store = writable({
    onMain: false,
    rsvps: null,
    adminInfo: null,
  })
  return {
    subscribe: store.subscribe,
    setOnMain(onMain = true) {
      store.update(state => {
        state.onMain = onMain
        return state
      })
    },
    async saveRsvp(email, guests, id) {
      const body = { email, guests }
      if (id) {
        body.id = id
      }
      const response = await api.post("/api/rsvp", body)
      if (response.status !== 200) {
        throw "Unable to save RSVP"
      }
      return updateRsvp(store, response)
    },
    async getRsvp(email) {
      const response = await api.get(`/api/rsvp/${email}`)
      if (response.status !== 200) {
        throw "Unable to retrieve RSVP"
      }
      return updateRsvp(store, response)
    },
    async getAdminInfo() {
      const response = await api.get("/api/rsvp/all")
      if (response.status !== 200) {
        throw "Forbidden"
      }
      const json = await response.json()
      store.update(state => {
        state.adminInfo = json
        return state
      })
      return json
    }
  }
}

export default createDataStore()
