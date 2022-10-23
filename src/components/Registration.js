import React, { useState } from 'react'

const Registration = () => {
  const [regisform, setRegisform] = useState({ name: "", email: "", phone: "", address: "", password: "" })

  const valChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setRegisform({ ...regisform, [name]: value })
  }
  // console.log(regisform);

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, password } = regisform;
    const res = await fetch("http://localhost:5000/registration", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, phone, address, password
      })
    });
    const data = await res.json()

    if (data.success) {
      window.alert("Registration Successfully")
      setRegisform({ name: "", email: "", phone: "", address: "", password: "" })
    } else {
      window.alert(`Error - ${data.message}`)
    }

  }
  return (
    <div className='container'>

      <form method='post'>
        <div className=" mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" name='name' value={regisform.name} onChange={valChange} />
        </div>
        <div className=" mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' value={regisform.email} onChange={valChange} />
        </div>
        <div className=" mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="number" className="form-control" id="phone" name='phone' value={regisform.phone} onChange={valChange} />
        </div>
        <div className=" mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name='address' value={regisform.address} onChange={valChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' value={regisform.password} onChange={valChange} />
        </div>

        <button type="submit" className="btn btn-primary" onClick={PostData} >Submit</button>
      </form>

    </div>
  )
}

export default Registration