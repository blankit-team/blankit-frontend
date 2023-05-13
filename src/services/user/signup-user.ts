import API_ENDPOINTS from '@/config/api-endpoints'
import { apiClient } from '../client'
import { SignUpFormData } from '@/app/signup/hooks/use-sign-up-form'

type SignupData = Omit<SignUpFormData, 'confirmPassword'>

type User = {
  id: string
  name: string
  nickName: string
}

const signupUser = async (loginData: SignupData): Promise<User> => {
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

export default signupUser
