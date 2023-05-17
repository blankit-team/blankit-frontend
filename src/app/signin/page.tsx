import SignInForm from './components/sign-in-form'
import SignUpButton from '../../components/buttons/sign-up-button'
import OAuthSignIn from './components/oauth-sigin-in'

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <SignInForm />
      <OAuthSignIn />
      <SignUpButton />
    </div>
  )
}
