import API_ENDPOINTS from '@/config/api-endpoints'
import { apiClient } from '../client'

type User = {
  id: string
}
const getUser = async (id: string): Promise<User> => {
  return apiClient
    .get<User>(`${API_ENDPOINTS.USER}/${id}`)
    .then((res) => res.data)
}

export default getUser
