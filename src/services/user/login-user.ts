import ApiEndPoint from '@/config/api-endpoints'
import { apiClient } from '@/lib/axios'

type LoginData = {
  id: string
  password: string
}

type User = {
  id: string
  name: string
  nickName: string
}

const loginUser = async (loginData: LoginData): Promise<User> => {
  return apiClient
    .post(`${ApiEndPoint.user}`, {
      id: loginData.id,
      password: loginData.password,
    })
    .then((res) => res.data)
}

export default loginUser
