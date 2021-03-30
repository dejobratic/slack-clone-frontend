import { httpService } from "services/HttpService"

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api/users`

class UserLoginService {
  async signIn(credentials) {
    const headers = {
      "Content-Type": "application/json",
      email: credentials.email,
      password: credentials.password,
    }
    return await httpService.get(baseUrl, headers)
  }
  async signUp(credentials) {
    const headers = {
      "Content-Type": "application/json",
    }
    return await httpService.post(baseUrl, credentials, headers)
  }
}
export const userLoginService = new UserLoginService()
