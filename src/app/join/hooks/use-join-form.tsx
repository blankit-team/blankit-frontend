import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
interface JoinFormData {
  email: string
  password: string
}

export const useJoinForm = () => {
  const { register, formState, handleSubmit } = useForm<JoinFormData>()
  const searchParams = useSearchParams()

  const isError = searchParams.get('error')

  useEffect(() => {
    if (isError === 'CredentialsSignin') {
      alert('이메일 혹은 비밀번호를 확인해주세요.')
    }
  }, [isError])

  const onSubmit = (data: JoinFormData) => {
    signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/',
    })
  }

  return {
    register,
    emailError: formState.errors.email?.message,
    passwordError: formState.errors.password?.message,
    onSubmit: handleSubmit(onSubmit),
  }
}
