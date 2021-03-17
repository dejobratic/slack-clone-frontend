class HttpService {
  async get(url) {
    var response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })

    return await response.json()
  }

  async post(url, body) {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
  }
}

export const httpService = new HttpService()
