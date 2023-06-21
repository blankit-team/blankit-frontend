import axios from 'axios'

import { apiAddress, env } from '@/config/dev-mode'
import { redirect } from 'next/navigation'
import NAVIGATION_PATH from '@/config/navigation-path'

export const apiClient = axios.create({
  baseURL: apiAddress[env],
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      redirect(NAVIGATION_PATH.SIGN_IN)
    }
    return Promise.reject(error)
  },
)
