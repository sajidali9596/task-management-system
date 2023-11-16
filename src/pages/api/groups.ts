// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dataStore from "../../utils/dataStore";
import { Group } from "@/utils/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Group[]>
) {
  res.status(200).json(dataStore.getGroups());
}
