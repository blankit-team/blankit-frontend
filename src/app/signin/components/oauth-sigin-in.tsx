'use client'

import GoogleSignInButton from '@/components/buttons/google-sign-in-button'
import KakaoSignInbutton from '@/components/buttons/kakao-sign-in-button'

export default function OAuthSignIn() {
  return (
    <div className="flex flex-col justify-center w-full gap-4">
      <GoogleSignInButton />
      <KakaoSignInbutton />
    </div>
  )
}
