"use client"
import React from "react";
import {signOut} from "next-auth/react";
import Link from "next/link";
import {Session} from "next-auth";

export default function AuthOptions({session}: {session: Session|null}) {
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