import classNames from 'classnames'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface BKContainerProps {
  children: React.ReactNode
  className?: string
}

export function BKContainer({ children, className }: BKContainerProps) {
  return (
    <div
      className={classNames(
        twMerge('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className),
      )}
    >
      {children}
    </div>
  )
}
