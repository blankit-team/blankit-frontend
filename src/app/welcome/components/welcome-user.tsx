import React from 'react'
import Image from 'next/image'
import JoinButton from '@/components/buttons/join-button'
import NavigationPath from '@/config/navigation-path'

export default function WelcomeUser() {
  return (
    <div className="flex flex-col items-center">
      <Image src={'/images/check.svg'} alt="check" width={40} height={40} />
      <h1 className="mt-4 mb-3 text-3xl font-bold">환영해요 김블랭님!</h1>
      <h3 className="mt-1 text-lg text-[#ABABAB] whitespace-normal">
        피드백을 남기기 전에 간단한 프로필을 설정하면
        <br /> 회원님에게 필요한 작업물을 추천해드릴게요!
      </h3>
      <div className="my-4">
        <JoinButton className="w-60 h-10 bg-[#ABABAB]" />
      </div>
      <a
        href={NavigationPath.home}
        className="text-sm text-gray-700 underline hover:no-underline"
      >
        나중에 설정하기
      </a>
    </div>
  )
}
