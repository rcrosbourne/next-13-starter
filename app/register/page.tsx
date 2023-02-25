import React from "react";
import Register from "./register";
import { getServerSession } from "next-auth/next";
import {getCsrfToken} from "next-auth/react";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import { redirect } from 'next/navigation';
const Page = async () => {
  const csrfToken = await getCsrfToken() || "";
    const session = await getServerSession(authOptions);
    if (session) {
       redirect("/");
    }
  return <>
      {!session && <Register csrfToken={csrfToken} /> }
    </>;
};

export default Page;
