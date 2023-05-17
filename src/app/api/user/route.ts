import { getToken } from 'next-auth/jwt'

export async function POST(request: Request) {
  const credentials = await request.json()
  const { email, password } = credentials
  if (email !== 'admin@gmail.com' || password !== 'admin') {
    return new Response(
      JSON.stringify({ error: 'Invalid email or password' }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 401,
      },
    )
  }

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

export async function GET(request: Request) {
  const token = await getToken({ req: request as any, raw: true })
  return new Response(JSON.stringify({ token }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
