import classNames from 'classnames'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  className?: string
}

export default function Logo({ className }: Props) {
  return (
    <h1 className={classNames(twMerge('text-[32px]', 'font-thin', className))}>
      Blankit
    </h1>
  )
}
