'use client'
import { FunctionComponent } from 'react'
import { BKButton } from '../ui/bk-button'
import { BKIcons } from '../ui/bk-icons'
import { signIn } from 'next-auth/react'
import NavigationPath from '@/config/navigation-path'
interface GoogleSignInButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

const GoogleSignInButton: FunctionComponent<GoogleSignInButtonProps> = ({}) => {
  return (
    <BKButton
      variant={'outline'}
      onClick={() => signIn('google', { callbackUrl: NavigationPath.home })}
    >
      <BKIcons.Google className="mr-2" size={24} />
      <span className="font-semibold">Continue with Google</span>
    </BKButton>
  )
}

export default GoogleSignInButton
