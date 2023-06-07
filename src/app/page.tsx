import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import SignOutButton from '@/components/buttons/sign-out-button'
import { BKContainer } from '@/components/ui/bk-container'
import NAVIGATION_PATH from '@/config/navigation-path'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect(NAVIGATION_PATH.SIGN_IN)
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <BKContainer>
        {session && (
          <div className="flex flex-col gap-2">
            <h2>{session?.user?.username}님 환영합니다.</h2>
            <SignOutButton />
          </div>
        )}
      </BKContainer>
    </main>
  )
}
