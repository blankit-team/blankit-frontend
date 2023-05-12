import BKButton from '@/components/ui/bk-button'
import Link from 'next/link'
export default function SignUpButton() {
  return (
    <Link href={'/signup'}>
      <BKButton>회원가입</BKButton>
    </Link>
  )
}
