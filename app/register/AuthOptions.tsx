"use client"
import React from "react";
import {signIn, signOut, useSession} from "next-auth/react";
import Link from "next/link";

export default function AuthOptions() {
    const { data: session, status } = useSession();
    // add links to sign in and sign out based on the session
    return (
        <div>
            {session && (
                <>
                    Signed in as {session.user.email} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            )}
            {!session && (
                <>
                    Not signed in <br />
                    <Link href="/auth/signin">Sign in</Link>
                    <Link href="/register">Register</Link>
                </>
            )}
        </div>
    );

}