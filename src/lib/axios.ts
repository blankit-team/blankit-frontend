import axios from 'axios'

import { redirect } from 'next/navigation'
import NAVIGATION_PATH from '@/config/navigation-path'
import { ApiAddressTypes } from '@/types/config'
import { baseUrl } from '@/config/public-env'
import { nodeEnv } from '@/config/env'

const baseUrlTable: ApiAddressTypes = {
  production: baseUrl,
  development: 'http://localhost:3000',
  test: 'http://localhost:3000',
}

export const apiClient = axios.create({
  baseURL: baseUrlTable[nodeEnv],
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
