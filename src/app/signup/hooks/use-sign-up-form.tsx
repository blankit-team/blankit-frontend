import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import signupUser from '@/services/user/signup-user'
import NAVIGATION_PATH from '@/config/navigation-path'

export interface SignUpFormData {
  name: string
  nickName: string
  id: string
  email: string
  password: string
  confirmPassword: string
}

export const useSignUpForm = () => {
  const { register, formState, handleSubmit, watch } = useForm<SignUpFormData>()

  const router = useRouter()

  const mutation = useMutation({
    mutationFn: signupUser,
    onSuccess: () => router.push(NAVIGATION_PATH.SIGN_IN),
  })

  const onSubmit = (data: SignUpFormData) => {
    mutation.mutate(data)
  }

  return {
    register,
    watch,
    nameError: formState.errors.name?.message,
    nickNameError: formState.errors.nickName?.message,
    idError: formState.errors.id?.message,
    emailError: formState.errors.email?.message,
    passwordError: formState.errors.password?.message,
    confirmPasswordError: formState.errors.confirmPassword?.message,
    onSubmit: handleSubmit(onSubmit),
  }
}
