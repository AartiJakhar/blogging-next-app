// http://localhost:3000/api/contact
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import { json } from 'stream/consumers'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
        if (req.method === 'POST') {
            const readfile= await fs.promises.readdir('postContactData', 'utf8')
            fs.promises.writeFile(`postContactData/${readfile.length + 1}.json`,JSON.stringify(req.body))
       res.send(req.body)
        } else {
        res.send("Method should be Post ")
        }
      }
    


