import { cva, type VariantProps } from 'class-variance-authority'
import classNames from 'classnames'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonVariants = cva(['px-4', 'py-2', 'rounded-md', 'text-white'], {
  variants: {
    intent: {
      primary: 'bg-blue-500',
      secondary: 'bg-gray-500',
      'primary-outline': 'bg-transparent text-blue-500 border border-blue-500',
      'secondary-outline':
        'bg-transparent text-gray-500 border border-gray-500',
    },
    size: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-md',
      lg: 'px-6 py-3 text-lg',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
})

interface BKButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset' | undefined
}
const BKButton = forwardRef<HTMLButtonElement, BKButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={classNames(
          twMerge(
            buttonVariants({
              intent: props.intent,
              className,
            }),
          ),
        )}
      >
        {props.children}
      </button>
    )
  },
)

BKButton.displayName = 'BKButton'

export default BKButton
