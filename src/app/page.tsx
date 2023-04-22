import API_ENDPOINTS from '@/config/api-endpoints'
import NAVIGATION_PATH from '@/config/navigation-path'
import BKButton from '@ui/bk-button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Link href={NAVIGATION_PATH.SIGN_IN}>
        <BKButton id={'target'} intent={'secondary'} size={'sm'}>
          Hello
        </BKButton>
      </Link>
    </main>
  )
}
