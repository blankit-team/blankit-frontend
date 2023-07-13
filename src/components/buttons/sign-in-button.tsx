'use client'

import { signIn } from 'next-auth/react'
import { BKButton } from '@/components/ui/button'

export default function SignInButton() {
  return (
    <BKButton
      onClick={() => {
        signIn()
      }}
    >
      로그인
    </BKButton>
  )
}
