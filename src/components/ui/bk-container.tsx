import classNames from 'classnames'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface BKContainerProps {
  children: React.ReactNode
  className?: string
}

export function BKContainer({ children, className }: BKContainerProps) {
  return (
    <div className={classNames(twMerge('w-full max-w-7xl mx-auto', className))}>
      {children}
    </div>
  )
}
