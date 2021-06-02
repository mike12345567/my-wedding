import { toast } from "@zerodevx/svelte-toast"

export const success = m =>
  toast.push(m, {
    theme: {
      "--toastBackground": "green",
      "--toastColor": "white",
      "--toastProgressBackground": "darkgreen",
    },
  })

export const failure = m =>
  toast.push(m, {
    theme: {
      "--toastBackground": "red",
      "--toastColor": "white",
      "--toastProgressBackground": "darkred",
    },
  })
