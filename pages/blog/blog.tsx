import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css"
import Link from "next/link";
export default function blog() {
const [blogs, setBlogs] = useState([{
  "title":"how to learn Nodejs",
  "description":"Java is a coding launguage which is  ",
  "content":"ava is a coding launguage which is the most need full one",
  "author":"Harry bhai",
  "slug":"how-to-learn-nodejs"
}]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs").then((a)=>{
     return a.json();})
     .then((parsed)=>{
      setBlogs(parsed)
    })
  }, [])
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
    
    {blogs.map((e)=>{
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

// http://localhost:3000/api/getblog?slug=how-to-learn-java
///http://localhost:3000/blog/blog