'use client'

import React from 'react'
import { BKButton } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import NavigationPath from '@/config/navigation-path'

interface FeedbackButtonProps {
  className?: string
}

export default function FeedbackButton({ className }: FeedbackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(NavigationPath.feedbackNew)
  }

  return (
    <BKButton className={className} onClick={handleClick}>
      피드백 요청하기
    </BKButton>
  )
}
