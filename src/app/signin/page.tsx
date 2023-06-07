import Title from './components/title'
import OAuthSignIn from './components/oauth-sigin-in'
import Description from './components/description'

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="mt-20 mb-14">
        <Title />
      </div>
      <div className="w-1/2 max-w-md mx-auto mb-4">
        <OAuthSignIn />
      </div>
      <div className="w-1/2 max-w-md mx-auto">
        <Description />
      </div>
    </div>
  )
}
