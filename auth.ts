import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import { loginRequest } from "./src/service/login-service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const { username, password } = credentials as {
          username: string
          password: string
        };
        try {
          const response = await loginRequest(username, password);
          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message);
          }
          const user = data.user;
          user.token = data.accessToken;
          return user;

        } catch (error) {
          throw error;
        }
      },
    }),
  ],
})