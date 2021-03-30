class HttpService {
  async get(url, headers) {
    var response = await fetch(url, {
      method: "GET",
      headers: headers,
    })

    return await response.json()
  }

  async post(url, body, headers) {
    var response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    })

    return await response.json()
  }
}

export const httpService = new HttpService()
