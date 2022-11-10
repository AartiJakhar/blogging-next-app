
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
export default function slug() {
               
    const [blog, setblog] = useState({"title":"how to learn Nodejs",
    "description":"Java is a coding launguage which is  ",
    "content":"ava is a coding launguage which is the most need full one",
    "author":"Harry bhai",
    "slug":"how-to-learn-nodejs"})
const router=useRouter();
 useEffect(() => {
  if(!router.isReady) return;
  const {slug}=router.query

   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
    return a.json();
  })
    .then((data)=>{
      setblog(data)
    })
 }, [router.isReady])
 



    
    return (
  
    <div>
        <style jsx>
          {`
            .container{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 70%;
                margin: auto;
            }
          `}
        </style>
        <div className="container">
         <h1>
           {blog && blog.title}
         </h1>
         <h2>
          { blog && blog.description}
         </h2>
         <p>
          {blog && blog.content}
         </p>
         <h4>{blog && blog.author}</h4>
        </div>
        </div>
  )
}
