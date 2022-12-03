import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css"
import Link from "next/link";
import * as fs from 'fs'
const  blog=(props:any)=> {
  console.log("hello")
const [blogs, setBlogs] = useState(props.allBlogs);
// console.log(props.allBlogs)
// useEffect(() => {
    
//   }, [])
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
    
    {blogs.map((e:any)=>{
      return  <div key={e.slug}
      className={styles.grid} style={{margin:"auto"}}> <Link href={`/blog/blogpost/${e.slug}`} className={styles.card}>
      <h2>{e.title} &rarr;</h2>
      <p>{e.metadesc.slice(0,60)}..</p>
    </Link>
</div>;
    })}

   
    </div>
  );
}

export async function getStaticProps(context:any) {
  let data = await fs.promises.readdir("blogdata");
  let myFiles;
  let allBlogs =[];

for (let index = 0; index < data.length; index++) {
 const element = data[index];
 myFiles=await  fs.promises.readFile(`blogdata/${element}`,'utf-8')
allBlogs.push(JSON.parse(myFiles))
console.log(allBlogs)
// console.log(allBlogs)
      // setBlogs(parsed)
  
    }
    return {props : {allBlogs},}
}
export default blog;

// http://localhost:3000/api/getblog?slug=how-to-learn-java
///http://localhost:3000/blog/blog