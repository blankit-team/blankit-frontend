import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const BKLabel = forwardRef<HTMLLabelElement, React.HTMLProps<HTMLLabelElement>>(
  ({ className, htmlFor, ...props }, ref) => {
    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        {...props}
        className={twMerge(
          ['block', 'text-sm', 'font-medium', 'text-gray-700'],
          ['dark:text-gray-300'],
          className,
        )}
      >
        {props.children}
      </label>
    )
  },
)

BKLabel.displayName = 'BKLabel'

export default BKLabel
