import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  callbacks: {
    jwt({ user, token }) {
      return {
        ...token,
        ...user,
      }
    },
    async session({ token, session, user }) {
      session.user = {
        username: token.username! as string,
        email: token.email!,
        accessToken: token.accessToken as string,
      }

      return session
    },
  },

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: '이메일을 입력해주세요',
        },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const res = await fetch('http://localhost:3000/api/user', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        })

        const user = await res.json()
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        if (res.status === 401) {
          // Return null if user data could not be retrieved
          return null
        }

        return null
      },
    }),
  ],

  pages: {
    signIn: '/signin',
  },
} as AuthOptions
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
