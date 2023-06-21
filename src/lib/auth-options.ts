import loginUser from '@/services/user/login-user'
import { signupUserOAuth } from '@/services/user/signup-user'
import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import KaKaoProvider from 'next-auth/providers/kakao'

export const authOptions: AuthOptions = {
  callbacks: {
    async signIn({ user, account, profile }) {
      // 최초 Oauth 로그인 시 회원가입
      console.log('account', account)
      if (account?.provider === 'oauth' && !user) {
        const userData = { ...profile }

        try {
          await signupUserOAuth(userData)
          return true
        } catch (error: any) {
          throw new Error(error.message)
        }
      }

      // 백엔드에서 유저 정보 및 access Token 발급
      if (account?.provider === 'oauth' && account) {
        try {
          await loginUser({
            id: account.id_token!,
            password: account.accessToken as string,
          })
          // TODO: 유저 정보 및 access Token 저장
          return true
        } catch (error: any) {
          throw new Error(error.message)
        }
      }

      return true
    },

    async jwt({ user, token }) {
      return {
        ...token,
        ...user,
      }
    },

    async session({ token, session, user }) {
      session.user = {
        ...session.user,
        ...token,
        ...user,
      }
      return session
    },
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    KaKaoProvider({
      clientId: process.env.KAKAO_ID!,
      clientSecret: process.env.KAKAO_SECRET!,
    }),
  ],

  pages: {
    signIn: '/signin',
  },
}
