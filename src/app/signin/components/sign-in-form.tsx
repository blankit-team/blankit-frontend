'use client'
import BKButton from '@/components/ui/bk-button'
import BKTextInput from '@/components/ui/bk-text-input'
import { useSignInForm } from '../hooks/use-sign-in-form'
import BKLabel from '@/components/ui/bk-label'
import BKCheckBox from '@/components/ui/bk-checkbox'

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
        <div className="flex flex-row justify-between gap-4">
          <BKCheckBox value={'로그인 상태 유지'} />
          <BKButton type="button">비밀번호 찾기</BKButton>
        </div>
        <BKButton type="submit">로그인</BKButton>
      </form>
    </>
  )
}
