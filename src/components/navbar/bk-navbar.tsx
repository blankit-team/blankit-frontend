import React from 'react'
import { BKContainer } from '../ui/bk-container'
import NAVIGATION_PATH from '@/config/navigation-path'
import Link from 'next/link'

export default function BKNavbar() {
  return (
    <div>
      <BKContainer className="flex justify-between py-2 ">
        <h1>logo</h1>
        <div>
          <ul className="flex gap-4">
            <Link href={NAVIGATION_PATH.HOME}>
              <li>홈</li>
            </Link>
            <li>피드</li>
            <li>그룹</li>
            <li>마이페이지</li>
            <li>검색</li>
          </ul>
        </div>
      </BKContainer>
    </div>
  )
}
