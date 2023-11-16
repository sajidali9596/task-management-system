// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dataStore from "../../utils/dataStore";
import { Response, SuccessResponse } from "@/utils/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response | SuccessResponse>
) {
  if (req.method === "GET") {
    const tasks = dataStore.getTasks();
    res.send({
      message: "success",
      data: tasks,
    });
  }
}
