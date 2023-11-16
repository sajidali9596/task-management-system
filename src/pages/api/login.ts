// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dataStore from "../../utils/dataStore";
import { Response, User } from "@/utils/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response | User>
) {
  if (req.method === "POST") {
    const users = dataStore.getUsers();
    const user = users.find(
      (u) => u.email === req.body.email && u.password === req.body.password
    );
    if (!user || !Object.keys(user)?.length) {
      res.status(401).send({
        message: "Invalid email or password",
      });
    } else {
      res.status(200).send(user);
    }
  }
}
