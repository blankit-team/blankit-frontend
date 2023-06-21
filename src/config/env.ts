// GoogleProvider({
//     clientId: process.env.GOOGLE_ID!,
//     clientSecret: process.env.GOOGLE_SECRET!,
//   }),
//   KaKaoProvider({
//     clientId: process.env.KAKAO_ID!,
//     clientSecret: process.env.KAKAO_SECRET!,
//   }),

import { EnvironmentTypes } from '@/types/config'
import { assertValue } from '@/utils/assert-value'

export const googleClientId = assertValue<string>(
  process.env.GOOGLE_ID,
  'GOOGLE_ID가 설정되지 않았습니다.',
)

export const googleClientSecret = assertValue<string>(
  process.env.GOOGLE_SECRET,
  'GOOGLE_SECRET이 설정되지 않았습니다.',
)

export const kakaoClientId = assertValue<string>(
  process.env.KAKAO_ID,
  'KAKAO_ID가 설정되지 않았습니다.',
)

export const kakaoClientSecret = assertValue<string>(
  process.env.KAKAO_SECRET,
  'KAKAO_SECRET이 설정되지 않았습니다.',
)

export const nodeEnv: EnvironmentTypes = process.env.NODE_ENV
