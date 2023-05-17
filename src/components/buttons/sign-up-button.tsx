import BKButton from '@/components/ui/bk-button'
import NAVIGATION_PATH from '@/config/navigation-path'
import Link from 'next/link'
export default function SignUpButton() {
  return (
    <Link href={NAVIGATION_PATH.SIGN_UP}>
      <BKButton>회원가입</BKButton>
    </Link>
  )
}
