import React from "react";
import SignIn from "./signin";
import { getServerSession } from "next-auth/next";
import {getCsrfToken} from "next-auth/react";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import { redirect } from 'next/navigation';
const Page = async () => {
  const session = await getServerSession(authOptions);
  const csrfToken = await getCsrfToken() || "";
  if (session) {
    redirect("/");
  }
  return <SignIn  csrfToken={csrfToken}/>;
};
export default Page;
