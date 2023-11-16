// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dataStore from "../../utils/dataStore";
import { Response } from "@/utils/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "PUT") {
    res.send({
      message: "WORK IN PROGRESS",
    });
  }
}
