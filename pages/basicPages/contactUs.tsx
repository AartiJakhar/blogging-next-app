import React, { useEffect, useState } from 'react'

export default function Services(props: any) {
  const [first, setfirst] = useState({ email: "", password: "" })
  const onChange = (e: any) => {
    setfirst({ ...first, [e.target.name]: e.target.value })
     
  }
  const onSubmit=async(e:any)=>{
    e.preventDefault()
     const data = await fetch(' http://localhost:3000/api/contact', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      email:first.email,
      password:first.password
    })

  });
  setfirst({ email: "", password: "" })
}
  return (
    <form className='container' onSubmit={onSubmit}>
      <div className="form-group mx-3">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" name='email' className="form-control" value={first.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1" >Password</label>
        <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={onChange} value={first.password} />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

