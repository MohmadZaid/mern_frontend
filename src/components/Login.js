import React, { useState } from 'react'

const Login = () => {

  const [login, setLogin] = useState({ email: "", password: "" })
  // console.log(login)
  const valChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setLogin({ ...login, [name]: value })
  };

  const loginUser = async (e) => {
    e.preventDefault();
    let { email, password } = login
    const res = await fetch('/loginserver', {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = await res.json();
    console.log(data);

    if (data.success) {
      window.alert("Login Successfully")
      setLogin({ email: "", password: "" })
    } else {
      window.alert(`Error - ${data.message}`)
    }

  }

  return (
    <div className='container'>
      <form>
        <div className=" mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={login.email} onChange={valChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={login.password} onChange={valChange} />
        </div>

        <button type="submit" className="btn btn-primary" onClick={loginUser} >Submit</button>
      </form>

    </div>
  )
}

export default Login