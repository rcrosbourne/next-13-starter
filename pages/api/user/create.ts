// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "@/lib/prismadb";
import { z } from "zod";
import { hash } from "bcryptjs";
const responseSchema = z.object({
  id: z.string(),
  email: z.string().email({ message: "Invalid email" }),
  name: z.string(),
});
const errorSchema = z.object({
    message: z.string(),
});
type Data = z.infer<typeof responseSchema>;
type Error = z.infer<typeof errorSchema>;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const { email, name, password } = req.body;
  const newUser = await client.user.create({
    data: {
      email: email,
      name: name,
      password: await hash(password, 10),
    },
  });
  res.status(200).json(responseSchema.parse(newUser));
}
