// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import { json } from 'stream/consumers'
type Data = {
  data:string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fs.readdir("blogdata",(err,data)=>{
    res.status(200).json(data);
  })
}