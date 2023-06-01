import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import SignOutButton from '@/components/buttons/sign-out-button'
import SignInButton from '@/components/buttons/sign-in-button'
import SignUpButton from '@/components/buttons/sign-up-button'
import { BKContainer } from '@/components/ui/bk-container'
import BKButton from '@/components/ui/bk-button'

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <main>
      <section className="min-h-screen">
        <BKContainer>
          <div className="flex flex-col items-center justify-center gap-4 pt-60">
            <h2 className="text-6xl font-light">피드백을 주고 받다, Blankit</h2>
            <p className="text-xl">
              Blankit은 피드백을 주고 받는 서비스입니다.
            </p>
            <p className="text-xl">
              피드백을 주고 받으며 서로의 성장을 도와주세요.
            </p>
            <div className="mt-12">
              <BKButton>작업물 올리기</BKButton>
            </div>
          </div>
        </BKContainer>
      </section>
      <section className="min-h-screen bg-slate-400 py-60">
        <BKContainer className="flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-6xl font-light">Blankit을 시작해보세요.</h2>
          </div>
          <div className="flex flex-col gap-8 text-center">
            <h3 className="text-xl">
              한번에 기억할 수 있도록, 그래픽 디자이너
            </h3>
            <div className="flex gap-4">
              <div className="w-48 h-48 bg-gray-500 rounded-md"></div>
              <div className="w-48 h-48 bg-gray-500 rounded-md"></div>
              <div className="w-48 h-48 bg-gray-500 rounded-md"></div>
              <div className="w-48 h-48 bg-gray-500 rounded-md"></div>
            </div>
          </div>
          <div className="flex flex-col gap-8 text-center">
            <h3 className="text-xl">
              사용자에게 더 편한 경험을, 프로덕트 디자이너
            </h3>
            <div className="flex gap-4">
              <div className="w-48 h-48 bg-gray-500 rounded-md"></div>
              <div className="w-48 h-48 bg-gray-500 rounded-md"></div>
              <div className="w-48 h-48 bg-gray-500 rounded-md"></div>
              <div className="w-48 h-48 bg-gray-500 rounded-md"></div>
            </div>
          </div>
          <div className="flex flex-col gap-8 text-center">
            <h3 className="text-xl">브랜드에 새로운 생명을, 브랜드 디자이너</h3>
            <div className="flex gap-4">
              <div className="w-48 h-48 bg-gray-500 rounded-md"></div>
              <div className="w-48 h-48 bg-gray-500 rounded-md"></div>
              <div className="w-48 h-48 bg-gray-500 rounded-md"></div>
              <div className="w-48 h-48 bg-gray-500 rounded-md"></div>
            </div>
          </div>
        </BKContainer>
      </section>
      <section className="min-h-screen bg-slate-900">
        <BKContainer className="py-60">
          <div className="flex flex-col items-center justify-center gap-12">
            <h2 className="text-6xl font-light">
              Blankit에 업로드된 작업물을 확인하세요
            </h2>
            <p className="text-2xl">
              새로운 영감을 얻고, 피드백을 주고 받으며 성장하세요.
            </p>
            <div className="w-10/12 h-64 rounded-md bg-slate-500"></div>
            <BKButton>작업물 보러가기</BKButton>
          </div>
        </BKContainer>
      </section>
      <section className="min-h-screen bg-slate-400">
        <BKContainer className="py-60">
          <div className="flex flex-col items-center justify-center gap-12">
            <h2 className="text-6xl font-light">타이틀1</h2>
            <div className="w-5/12 h-64 rounded-md bg-slate-500"></div>
            <BKButton>작업물 보러가기</BKButton>
          </div>
        </BKContainer>
      </section>
    </main>
  )
}
