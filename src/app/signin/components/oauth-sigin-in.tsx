'use client'

import BKButton from '@/components/ui/bk-button'
import NAVIGATION_PATH from '@/config/navigation-path'
import { signIn } from 'next-auth/react'

export default function OAuthSignIn() {
  return (
    <div className="flex flex-row justify-center w-full gap-4">
      <BKButton
        onClick={() => signIn('google', { callbackUrl: NAVIGATION_PATH.HOME })}
      >
        Login With Google
      </BKButton>
      <BKButton
        onClick={() => signIn('kakao', { callbackUrl: NAVIGATION_PATH.HOME })}
      >
        Login With Kakao
      </BKButton>
    </div>
  )
}
