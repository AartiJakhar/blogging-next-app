import React from 'react'
// import Image from 'next/image'
 
export default function about() {
  return (
    <>
      <style jsx global >
     {`
      .imageWrap{
        text-align: center;
        margin:4rem 0rem 2rem 0rem;
      }
     `}
      </style>
      <div className='imageWrap'>
      <img src='/coding2.avif'  className='image' style={{  borderRadius:"10px !important"}} alt="Coding" width={600} height={399} />
      {/* <Image src='/coding2.avif'  className='image' style={{  borderRadius:"10px !important"}} alt="Coding" width={600} height={399} /> */}
      <div><h1>hello</h1>
      </div>

      </div>
    </>
  )
}
