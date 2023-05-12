import SignInForm from './components/sign-in-form'
import SignUpButton from './components/sign-up-button'

export default function SignInPage() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <SignInForm />
      <SignUpButton />
    </div>
  )
}
