import SignInForm from './components/sign-in-form'
import SignUpButton from '../../components/buttons/sign-up-button'

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <SignInForm />
      <SignUpButton />
    </div>
  )
}
