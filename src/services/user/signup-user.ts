import API_ENDPOINTS from '@/config/api-endpoints'
import { apiClient } from '../client'
import { SignUpFormData } from '@/app/signup/hooks/use-sign-up-form'
import { Profile } from 'next-auth'

type SignupData = Omit<SignUpFormData, 'confirmPassword'>

type User = {
  id: string
  name: string
  nickName: string
}

const signupUserCredential = async (loginData: SignupData): Promise<User> => {
  return apiClient
    .post(`${API_ENDPOINTS.USER_SIGNUP}`, {
      id: loginData.id,
      email: loginData.email,
      name: loginData.name,
      nickName: loginData.nickName,
      password: loginData.password,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.response)
    })
}

const signupUserOAuth = async (loginData: Profile): Promise<User> => {
  return apiClient
    .post(`${API_ENDPOINTS.USER_SIGNUP}`, { ...loginData })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.response)
    })
}

export { signupUserCredential, signupUserOAuth }
