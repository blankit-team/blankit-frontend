import ApiEndPoint from '@/config/api-endpoints'
import { apiClient } from '@/lib/axios'

type User = {
  id: string
}
const getUser = async (id: string): Promise<User> => {
  return apiClient
    .get<User>(`${ApiEndPoint.user}/${id}`)
    .then((res) => res.data)
}

export default getUser
