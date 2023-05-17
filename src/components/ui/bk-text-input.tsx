import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const BKTextInput = forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={twMerge(
        [
          'px-4',
          'py-2',
          'rounded-md',
          'border',
          'border-gray-300',
          'focus:outline-none',
          'focus:ring-2',
          'focus:ring-blue-500',
          'focus:border-blue-500',
          'shadow-sm',
          'sm:text-sm',
        ],
        [
          'dark:bg-gray-700',
          'dark:text-gray-300',
          'dark:border-gray-600',
          'dark:focus:ring-2',
          'dark:focus:ring-blue-500',
          'dark:focus:border-blue-500',
        ],
        className,
      )}
    />
  )
})

BKTextInput.displayName = 'BKTextInput'

export default BKTextInput
