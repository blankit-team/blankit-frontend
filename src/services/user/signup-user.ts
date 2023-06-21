import ApiEndPoint from '@/config/api-endpoints'
import { apiClient } from '@/lib/axios'
import { Profile } from 'next-auth'

type User = {
  id: string
  name: string
  nickName: string
}

const signupUserOAuth = async (loginData: Profile): Promise<User> => {
  return apiClient
    .post(`${ApiEndPoint.userSignup}`, { ...loginData })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.response)
    })
}

export { signupUserOAuth }
