'use client'

import { signIn } from 'next-auth/react'
import BKButton from '../ui/bk-button'

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
