'use client'
import { FunctionComponent } from 'react'
import { BKButton } from '../ui/button'
import { Icons } from '../ui/icons'
import { signIn } from 'next-auth/react'
import NavigationPath from '@/config/navigation-path'
interface GoogleSignInButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

const KakaoSignInbutton: FunctionComponent<GoogleSignInButtonProps> = ({}) => {
  return (
    <BKButton
      variant={'outline'}
      onClick={() =>
        signIn('kakao', {
          callbackUrl: NavigationPath.home,
        })
      }
    >
      <Icons.Kakao className="mr-2" size={22} />
      <span className="font-semibold">Continue with KaKao</span>
    </BKButton>
  )
}

export default KakaoSignInbutton
