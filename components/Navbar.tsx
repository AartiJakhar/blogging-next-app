import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <style jsx> 
       {`
      .topNavbar ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 22rem;
        margin: 1rem auto;
      
      
      }
      .topNavbar li{
        list-style: none;
      }
       `}
      </style>
      <nav className='topNavbar'>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/basicPages/about">About</Link>
          </li>
          <li>
            <Link href="/blog/blog">Blogs</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
