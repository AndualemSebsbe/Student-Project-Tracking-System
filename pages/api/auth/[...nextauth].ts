import { compare } from 'bcryptjs'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToMongoDB } from '../../../lib/mongodb'
import User from '../../../models/user'
import { IUser } from '../../../types'

const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectToMongoDB().catch(err => { throw new Error(err) })

                const user = await User.findOne({
                    username: credentials?.username
                }).select("+password")

                if (!user) {
                    throw new Error("Invalid credentials")
                }

                const isPasswordCorrect = credentials.password === user.password || (await compare(credentials!.password, user.password))

                if (!isPasswordCorrect) {
                    throw new Error("Invalid credentials")
                }

                const userWithRole = { ...user.toJSON(), role: user.role };

                return userWithRole;

                // return user
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token
        },
        session: async ({ session, token }) => {
            // session.user.role = user.role;
            const user = token.user as IUser
            session.user = user

            return session
        }
    }
}

export default NextAuth(options)
// import NextAuth from 'next-auth';
// import { NextApiRequest, NextApiResponse } from 'next';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { compare } from 'bcrypt';
// import mongoose from 'mongoose';
// import { connectToMongoDB } from '../../../lib/mongodb';
// import User from '../../../models/user';

// const options = {
//   providers: [
//     // Add your authentication providers here
//     CredentialsProvider({
//       // The name to display on the sign-in form (e.g., "Sign in with...")
//       name: 'Credentials',
//       credentials: {
//         username: { label: 'Username', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials: any) {
//         // Implement your own authentication logic here
//         // Fetch user from the MongoDB database and compare hashed passwords
//         const user = await getUserFromDatabase(credentials.username);

//         if (user && (await compare(credentials.password, user.password))) {
//           // You can return the user object or a subset of it
//           return Promise.resolve(user);
//         } else {
//           // If authentication fails, return null
//           return Promise.resolve(null);
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/login', // Customize the sign-in page URL
//   },
//   callbacks: {
//     async jwt(token, user, account) {
//       // Add user information to the token
//       if (user) {
//         token.id = user.id;
//         token.name = user.name;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session(session, token) {
//       // Add session data
//       session.user = token;
//       return session;
//     },
//   },
// };

// async function getUserFromDatabase(username: string) {
//   // Connect to the MongoDB database
//   await connectToMongoDB()

//   try {
//     // Fetch the user from the database
//     const user = await User.findOne({ username }).exec();

//     return user;
//   } finally {
//     // Disconnect from the database
//     await mongoose.disconnect();
//   }
// }

// export default (req: NextApiRequest, res: NextApiResponse) =>
//   NextAuth(req, res, options);

