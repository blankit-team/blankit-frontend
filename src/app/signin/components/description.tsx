import CheckBox from '@/components/ui/checkbox'
import React from 'react'

export default function Description() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-xs text-[#CECECE] mb-1">
        로그인은 이용약관과 개인정보 수집 및 이용에 동의하는 것을 의미합니다.
      </div>
      <CheckBox value="마케팅 정보 수신에 동의합니다." className="text-sm" />
    </div>
  )
}
