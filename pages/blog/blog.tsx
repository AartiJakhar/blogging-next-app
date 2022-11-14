import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css"
import Link from "next/link";
const  blog=(props:any)=> {
  console.log("hello")
const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(() => {
    
  // }, [])
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
    
    {blogs.map((e:any)=>{
      return  <div key={e.slug}
      className={styles.grid} style={{margin:"auto"}}> <Link href={`/blog/blogpost/${e.slug}`} className={styles.card}>
      <h2>{e.title} &rarr;</h2>
      <p>{e.description.slice(0,60)}..</p>
    </Link>
</div>;
    })}

   
    </div>
  );
}

export async function getServerSideProps(context:any) {

   const data = await fetch("http://localhost:3000/api/blogs")
   const allBlogs = await data.json();


      // setBlogs(parsed)
  
    return {props : {allBlogs},}
}

export default blog;

// http://localhost:3000/api/getblog?slug=how-to-learn-java
///http://localhost:3000/blog/blog