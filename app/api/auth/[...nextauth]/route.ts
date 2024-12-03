import { compare } from 'bcrypt';
import { UserRole } from '@prisma/client';
import { prisma } from '@/prisma/prisma-client';
import NextAuth, { NextAuthOptions } from 'next-auth';
import YandexProvider from 'next-auth/providers/yandex';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID || '',
      clientSecret: process.env.YANDEX_CLIENT_SECRET || '',
      profile(profile) {
        return {
          id: profile.id,
          name: profile.display_name,
          email: profile.default_email,
          image: profile.default_avatar_id,
          role: 'USER' as UserRole,
        };
      },
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Е-Майл',
          type: 'text',
        },
        password: {
          label: 'Пароль',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const values = {
          email: credentials.email,
        };

        const findUser = await prisma.user.findFirst({
          where: values,
        });

        if (!findUser) {
          return null;
        }

        const isPasswordValid = await compare(credentials.password, findUser.password);

        if (!isPasswordValid) {
          return null;
        }

        if (!findUser.verified) {
          return null;
        }

        return {
          id: String(findUser.id),
          email: findUser.email,
          name: findUser.fullName,
          role: findUser.role,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET_JWT,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token }) {
      const findUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (findUser) {
        token.id = String(findUser.id);
        token.email = findUser.email;
        token.fullName = findUser.fullName;
        token.role = findUser.role;
      }

      return token;
    },

    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
