'use client'
import { FunctionComponent } from 'react'
import { BKButton } from '../ui/bk-button'
import { BKIcons } from '../ui/bk-icons'
import { signIn } from 'next-auth/react'
import NAVIGATION_PATH from '@/config/navigation-path'
interface GoogleSignInButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

const KakaoSignInbutton: FunctionComponent<GoogleSignInButtonProps> = ({}) => {
  return (
    <BKButton
      variant={'outline'}
      onClick={() =>
        signIn('kakao', {
          callbackUrl: NAVIGATION_PATH.HOME,
        })
      }
    >
      <BKIcons.Kakao className="mr-2" size={22} />
      <span className="font-semibold">Continue with KaKao</span>
    </BKButton>
  )
}

export default KakaoSignInbutton
