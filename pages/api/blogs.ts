// http://localhost:3000/api/blogs
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
     let data = await fs.promises.readdir("blogdata");
     let myFiles;
     let allBlogs =[];
   
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    myFiles=await  fs.promises.readFile(`blogdata/${element}`,'utf-8')
   allBlogs.push(JSON.parse(myFiles))
  // allBlogs = myFiles;
  ; }

     
    res.status(200).json(allBlogs);
    

} 

