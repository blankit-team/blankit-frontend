import getUser from '@/services/user/get-user'

export async function GET(request: Request) {
  try {
    const data = await getUser('1')
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    return new Response('something wrong', { status: 500 })
  }
}
