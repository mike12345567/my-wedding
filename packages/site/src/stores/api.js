const call =
  method =>
  async (url, body = null) => {
    return await fetch(url, {
      method: method,
      body: body ? JSON.stringify(body) : body,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

export default {
  post: call("POST"),
  get: call("GET"),
}
