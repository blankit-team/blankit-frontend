'use client'

import BKButton from '@/components/ui/bk-button'
import BKTextInput from '@/components/ui/bk-text-input'
import { useSignUpForm } from '../hooks/use-sign-up-form'
import BKLabel from '@/components/ui/bk-label'

export default function SignUpForm() {
  const {
    register,
    onSubmit,
    watch,
    nameError,
    nickNameError,
    idError,
    emailError,
    passwordError,
    confirmPasswordError,
  } = useSignUpForm()

  const validatePassword = (value: string) => {
    const { password } = watch()
    if (value !== password) {
      return 'Passwords do not match'
    }
  }

  return (
    <form className="flex flex-col gap-[20px]" onSubmit={onSubmit}>
      <BKLabel htmlFor="name">이름</BKLabel>
      <BKTextInput
        id="name"
        {...register('name', {
          required: 'Name is required',
          pattern: {
            value: /\w{2,}/,
            message: 'Name is invalid',
          },
        })}
        type="name"
      />
      {nameError && <p className="text-red-500">{nameError}</p>}

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

      <BKLabel htmlFor="email">ID</BKLabel>
      <BKTextInput
        id="id"
        {...register('id', {
          required: 'Id is required',
          pattern: {
            value: /\S{5,}/,
            message: 'Id is invalid',
          },
        })}
        type="id"
      />
      {idError && <p className="text-red-500">{idError}</p>}

      <BKLabel htmlFor="email">닉네임</BKLabel>
      <BKTextInput
        id="nickName"
        {...register('nickName', {
          required: 'NickName is required',
          pattern: {
            value: /\S{3,}/,
            message: 'NickName is invalid',
          },
        })}
        type="nickName"
      />
      {nickNameError && <p className="text-red-500">{nickNameError}</p>}

      <BKLabel htmlFor="password">비밀번호</BKLabel>
      <BKTextInput
        id="password"
        {...register('password', {
          required: 'Password is required',
          pattern: {
            value: /\S{5,}/,
            message: 'Password is invalid',
          },
        })}
        type="password"
      />
      {passwordError && <p className="text-red-500">{passwordError}</p>}

      <BKLabel htmlFor="password">비밀번호 확인</BKLabel>
      <BKTextInput
        id="confirmPassword"
        {...register('confirmPassword', {
          required: 'Confirm password is required',
          validate: validatePassword,
        })}
        type="confirmPassword"
      />
      {confirmPasswordError && (
        <p className="text-red-500">{confirmPasswordError}</p>
      )}

      <BKButton type="submit">가입하기</BKButton>
    </form>
  )
}
