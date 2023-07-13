import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import SignOutButton from '@/components/buttons/sign-out-button'
import { Container } from '@/components/ui/container'
import NavigationPath from '@/config/navigation-path'
import { authOptions } from '@/lib/auth-options'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect(NavigationPath.signin)
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Container>
        {session && (
          <div className="flex flex-col gap-2">
            <h2>{session?.user?.username}님 환영합니다.</h2>
            <SignOutButton />
          </div>
        )}
      </Container>
    </main>
  )
}
