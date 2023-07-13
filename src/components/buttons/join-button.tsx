'use client'

import React from 'react'
import { BKButton } from '@/ui/bk-button'
import { useRouter } from 'next/navigation'
import NavigationPath from '@/config/navigation-path'

interface JoinButtonProps {
  className?: string
}

export default function JoinButton({ className }: JoinButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(NavigationPath.join)
  }

  return (
    <BKButton className={className} onClick={handleClick}>
      지금 설정하기
    </BKButton>
  )
}
