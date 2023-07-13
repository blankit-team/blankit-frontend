'use client'
import React from 'react'
import { BKButton } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return <BKButton onClick={() => signOut()}>로그아웃</BKButton>
}
