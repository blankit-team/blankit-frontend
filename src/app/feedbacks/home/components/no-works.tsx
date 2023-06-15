import FeedbackButton from '@/components/buttons/feeback-button'
import Image from 'next/image'
import React from 'react'

export default function NoWorksToFeedback() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={'/images/no-items.svg'}
        alt="no-items"
        width={40}
        height={40}
      />
      <h1 className="mt-2 text-2xl font-thin">작업물이 없습니다!</h1>
      <h3 className="mt-1 text-lg font-thin opacity-60">
        피드백 받고 싶은 작업물을 추가해 피드백을 요청해보세요.
      </h3>
      <div className="mt-8">
        <FeedbackButton className="w-48 h-12" />
      </div>
    </div>
  )
}
