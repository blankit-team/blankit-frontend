'use client'

import React from 'react'
import { Container } from '../ui/container'
import NavigationPath from '@/config/navigation-path'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import Logo from '../ui/logo'

export default function Navbar() {
  return (
    <div>
      <Container className="flex items-center justify-between py-2 ">
        <Logo className="text-[32px]" />
        <div>
          <ul className="flex gap-4">
            <NavigationLink href={NavigationPath.home}>홈</NavigationLink>
            {/* TODO: 추후 페이지 추가시 NAVGIATION_PATH로 관리 */}
            <NavigationLink href={NavigationPath.feedback}>
              피드백
            </NavigationLink>
            <NavigationLink href={'/works'}>작업물 보기</NavigationLink>
            <NavigationLink href={'/share'}>공유하기</NavigationLink>
          </ul>
        </div>
      </Container>
    </div>
  )
}

const NavigationLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  const currentPath = usePathname()
  const isSelected = currentPath === href
  return (
    <Link
      href={href}
      // TODO: 디자인 수정 필요
      className={classNames(
        'text-base font-thin',
        'text-gray-900 dark:text-gray-100',
        'hover:text-gray-900 dark:hover:text-gray-100',
        isSelected ? 'font-normal' : 'text-gray-400',
      )}
    >
      {children}
    </Link>
  )
}
