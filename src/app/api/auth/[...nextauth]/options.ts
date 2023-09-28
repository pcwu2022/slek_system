import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "your username"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials, req) {
                const user = { id: "0", username: "slekispowerful", password: "12345678" };
                if (credentials?.username === user.username && credentials?.password === user.password){
                    return user;
                } else {
                    return null;
                }
            },
        })
    ]
}