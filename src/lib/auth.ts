import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Mock authentication for Hackathon demo
        // Accepts any valid email with password "password" or "demo"
        // In a real app, this would query the DB.

        if (!credentials?.email || !credentials?.password) return null;

        const { email, password } = credentials;

        // Simulate DB call
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (
          password === "password" ||
          password === "demo" ||
          (typeof password === "string" && password.length > 5)
        ) {
          return {
            id: "1",
            name: "Research Student",
            email: String(email),
            image: "https://github.com/shadcn.png", // Generic avatar
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      return session;
    },
  },
  secret: "hackathon-secret-key-12345", // Hardcoded for demo simplicity
});
