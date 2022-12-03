import React, { useState } from "react";
import * as fs from 'fs'
export default function Slug(props: any) {
  function createMarkup(c:any) {
    return {__html: c};
  }
  const [blog, setblog] = useState(props.viewBlog);
  return (
    <div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 70%;
            margin: auto;
          }
        `}
      </style>
      <div className="container">
        <h1 >{blog && blog.title}</h1>
       {blog && <h2 dangerouslySetInnerHTML={createMarkup(blog.description)}></h2>}
      {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}

        <h4>{blog && blog.author}</h4>
      </div>
    </div>
  );
}
export async function getStaticPaths() { //how many pages we want to convert  into static (slug could be ,to ye phle se hi generate kerke rkh lega  )
  return {
    paths: [
      { params: { slug: "how-to-learn-java" } }, 
      { params: { slug: "how-to-learn-JavaScript" } },
      { params: { slug: "what-is-HTML" } },
    ],
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  console.log(context)
  const { slug } = await context.params;

  let viewBlogs= await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
  let viewBlog=JSON.parse(viewBlogs)
  
  return { props: { viewBlog } };
}
