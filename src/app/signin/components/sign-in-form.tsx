'use client'
import BKButton from '@/components/ui/bk-button'
import BKTextInput from '@/components/ui/bk-text-input'
import { useSignInForm } from '../hooks/use-sign-in-form'
import BKLabel from '@/components/ui/bk-label'

export default function SignInForm() {
  const { register, onSubmit, emailError, passwordError } = useSignInForm()

  return (
    <>
      <form className="flex flex-col gap-[20px]" onSubmit={onSubmit}>
        <BKLabel htmlFor="email">이메일</BKLabel>
        <BKTextInput
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Email is invalid',
            },
          })}
          type="email"
        />

        {emailError && <p className="text-red-500">{emailError}</p>}
        <BKLabel htmlFor="password">패스워드</BKLabel>
        <BKTextInput
          id="password"
          {...register('password', {
            required: 'Password is required',
          })}
          type="password"
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}
        <BKButton type="submit">Sign In</BKButton>
      </form>
    </>
  )
}
