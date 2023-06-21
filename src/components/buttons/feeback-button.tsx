'use client'

import React from 'react'
import { BKButton } from '@/ui/bk-button'
import { useRouter } from 'next/navigation'
import NAVIGATION_PATH from '@/config/navigation-path'

interface FeedbackButtonProps {
  className?: string
}

export default function FeedbackButton({ className }: FeedbackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(NAVIGATION_PATH.FEEDBACK_NEW)
  }

  return (
    <BKButton className={className} onClick={handleClick}>
      피드백 요청하기
    </BKButton>
  )
}
