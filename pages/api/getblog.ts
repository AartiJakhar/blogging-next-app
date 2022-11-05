// http://localhost:3000/api/getblog?slug=how-to-learn-java
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import { json } from 'stream/consumers'
type Data = {
  error: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
    if(err){
      res.status(500).json({error:"NO such blog found"})
    }
    res.status(200).json(JSON.parse(data));
  })

} 