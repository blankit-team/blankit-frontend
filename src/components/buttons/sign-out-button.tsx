'use client'
import React from 'react'
import BKButton from '../ui/bk-button'
import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return <BKButton onClick={() => signOut()}>로그아웃</BKButton>
}
