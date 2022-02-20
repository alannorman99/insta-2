import NextAuth, { getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// ...add more providers here
	],
	pages: {
		signIn: "/auth/signin",
	},
	callbacks: {
		async session({ session, token, user }) {
			session.user.username = session.user.name
				.split(" ")
				.join("")
				.toLocaleLowerCase()
			//Alan Norman
			//alannorman

			//token.sub is the userid that comes back from google
			session.user.uid = token.sub

			return session;
		},
	},
})