// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dataStore from "../../utils/dataStore";
import { Response } from "@/utils/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "POST") {
    const users = dataStore.getUsers();
    const user = users.find((u) => u.email === req.body?.email);
    if (!user || !Object.keys(user).length) {
      dataStore.setUser({
        name: req.body?.name,
        email: req.body?.email,
        id: `${Date.now()}`,
        password: req.body?.email,
        groupId: req.body.groupId,
      });
      res.status(200).json({
        message: "User created",
      });
    } else {
      res.status(400).json({
        message: "User already exits",
      });
    }
  }
}
