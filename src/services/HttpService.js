class HttpService {
  async post(url, body) {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export const httpService = new HttpService()
