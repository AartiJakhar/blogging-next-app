
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
export default function slug(props:any) {
               
    const [blog, setblog] = useState(props.viewBlog)    
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
export async function getServerSideProps(context:any) {
   const {slug}=context.query

  const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  const viewBlog = await data.json();
   return {props : {viewBlog},}
}
