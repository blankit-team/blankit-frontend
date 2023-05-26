import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

const checkBoxVariants = cva([''], {
  variants: {
    intent: {
      primary: 'bg-blue-500',
      secondary: 'bg-gray-500',
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
})

interface BKCheckBoxProps
  extends VariantProps<typeof checkBoxVariants>,
    React.ButtonHTMLAttributes<HTMLInputElement> {
  value: string
}

const BKCheckBox = forwardRef<HTMLInputElement, BKCheckBoxProps>(
  ({ className, value, ...props }, ref) => {
    return (
      <div className="flex items-center gap-1 ">
        <input
          type="checkbox"
          id={value}
          {...props}
          ref={ref}
          className={classNames(
            twMerge(checkBoxVariants({ intent: props.intent })),
          )}
        />
        <label htmlFor={value}>{value}</label>
      </div>
    )
  },
)

BKCheckBox.displayName = 'BKCheckBox'

export default BKCheckBox
