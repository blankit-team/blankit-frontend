import TextInput from '@/components/ui/text-input'
import React from 'react'

export default function NameForm() {
  return (
    <div>
      <h2 className="mb-8 text-2xl font-bold">이름을 알려주세요</h2>
      <div className="flex w-full border-[#AAAAAA] border-b-2 items-center">
        <TextInput
          className="w-full dark:bg-transparent dark:border-none "
          placeholder="이름"
        />
      </div>
    </div>
  )
}
