import { getToken } from 'next-auth/jwt'

export async function POST(request: Request) {
  const credentials = await request.json()
  const { name, nickName, email, password } = credentials

  // TODO: 실제 백엔드로 요청
  const user = {
    username: 'test user name',
    email: 'test user email',
    accessToken: 'test user access_token',
  }

  return new Response(JSON.stringify(user), {
    headers: { 'Content-Type': 'application/json' },
  })
}
