'use client'

import BKButton from '@/components/ui/bk-button'
import NAVIGATION_PATH from '@/config/navigation-path'
import { signIn } from 'next-auth/react'

export default function OAuthSignIn() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <BKButton
        intent={'google'}
        onClick={() => signIn('google', { callbackUrl: NAVIGATION_PATH.HOME })}
      >
        Login With Google
      </BKButton>
      <BKButton
        intent={'kakao'}
        onClick={() => signIn('kakao', { callbackUrl: NAVIGATION_PATH.HOME })}
      >
        Login With Kakao
      </BKButton>
    </div>
  )
}
