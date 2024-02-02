import { NextAuthOptions, getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account, profile }) { //(2) 
      if (account && account.type === "credentials") {
        token.userId = account.providerAccountId; // this is Id that coming from authorize() callback 
      }
      return token;
    },
    async session({ session, token, user }) { //(3)
      if (session && session.user) {
        user.id = token.userId as string;
        session.user = user;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string
          password: string
        };
        console.log(username, password)

        return {
          id: "9001",
          name: "Web Admin",
          email: "admin@example.com"
        };
      }
    })
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);