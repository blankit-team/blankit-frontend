import CheckBox from '@/components/ui/checkbox'
import TextInput from '@/components/ui/text-input'
import React from 'react'

export default function AccountForm() {
  return (
    <div>
      <h2 className="mb-8 text-2xl font-bold">
        피드백을 남길 이메일과 비밀번호를 설정해주세요
      </h2>
      <div className="flex w-5/6 m-auto border-[#AAAAAA] border-b-2 justify-around">
        <TextInput
          className="w-full dark:bg-transparent dark:border-none "
          placeholder="이메일"
        />
      </div>
      <div className="flex w-5/6 m-auto border-[#AAAAAA] border-b-2 justify-around">
        <TextInput
          className="w-full dark:bg-transparent dark:border-none"
          placeholder="비밀번호"
        />
      </div>
      <div className="flex w-5/6 m-auto mt-2">
        <CheckBox value={'[필수] 이용약관 및 개인정보 수집 동의'} />
      </div>
    </div>
  )
}
