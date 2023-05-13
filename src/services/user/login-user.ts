import API_ENDPOINTS from '@/config/api-endpoints'
import { apiClient } from '../client'

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
    .post(`${API_ENDPOINTS.USER}`, {
      id: loginData.id,
      password: loginData.password,
    })
    .then((res) => res.data)
}

export default loginUser
