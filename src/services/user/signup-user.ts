import API_ENDPOINTS from '@/config/api-endpoints'
import { apiClient } from '@/lib/axios'
import { Profile } from 'next-auth'

type User = {
  id: string
  name: string
  nickName: string
}

const signupUserOAuth = async (loginData: Profile): Promise<User> => {
  return apiClient
    .post(`${API_ENDPOINTS.USER_SIGNUP}`, { ...loginData })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.response)
    })
}

export { signupUserOAuth }
