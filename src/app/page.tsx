import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import SignOutButton from '@/components/buttons/sign-out-button'
import SignInButton from '@/components/buttons/sign-in-button'
import SignUpButton from '@/components/buttons/sign-up-button'
import { BKContainer } from '@/components/ui/bk-container'

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <BKContainer>
        {session && (
          <div className="flex flex-col gap-2">
            <h2>{session?.user?.username}님 환영합니다.</h2>
            <SignOutButton />
          </div>
        )}
        {!session && (
          <div className="flex flex-col gap-2">
            <h2>안녕하세요</h2>
            <SignInButton />
            <SignUpButton />
          </div>
        )}
      </BKContainer>
    </main>
  )
}
