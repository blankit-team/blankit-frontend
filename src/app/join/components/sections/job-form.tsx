import BKSelector from '@/components/ui/bk-selector'
import React from 'react'

const workYear = [
  { id: 0, value: '연차', unavailable: true },
  { id: 1, value: '신입' },
  { id: 2, value: '3년차 미만' },
  { id: 3, value: '5년차 미만' },
  { id: 4, value: '10년차 미만' },
  { id: 5, value: '10년차 이상' },
]

const role = [
  { id: 0, value: '직군', unavailable: true },
  { id: 1, value: '개발자' },
  { id: 2, value: '디자이너' },
  { id: 3, value: '기획자' },
  { id: 4, value: '마케터' },
  { id: 5, value: '기타' },
]

export default function JobForm({ name = '김블랭' }: { name?: string }) {
  return (
    <div>
      <h2 className="mb-8 text-2xl font-bold">
        {name}님, 어떤 일을 하고 계신가요?
      </h2>
      <div className="flex w-5/6 m-auto border-[#AAAAAA] border-b-2 justify-around">
        <BKSelector data={workYear} />
        <BKSelector data={role} />
      </div>
    </div>
  )
}
