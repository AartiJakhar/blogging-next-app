
import { useRouter } from 'next/router';
import React from 'react'
import jsn from "../../../blogdata/how-to-learn-java.json"
export default function slug() {
    const router=useRouter();
    const {slug}=router.query
    console.log(jsn)
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
           {slug}
         </h1>
         <h2>
            {jsn.description}
         </h2>
         <p>
           {jsn.content}
         </p>
         <h4>{jsn.author}</h4>
        </div>
        </div>
  )
}
