import { assertValue } from '@/utils/assert-value'

export const baseUrl = assertValue<string>(
  process.env.NEXT_PUBLIC_API_ADDRESS,
  'NEXT_PUBLIC_API_ADDRESS가 설정되지 않았습니다.',
)
