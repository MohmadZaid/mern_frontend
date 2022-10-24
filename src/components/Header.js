import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserState'

const Header = () => {

  const { userLogin } = useContext(UserContext)
  console.log(userLogin);

  const Login = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/note">Note</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/logout">Logout</Link>
        </li>
      </>
    )
  }
  const LogOut = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/register">Registration </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/login">Login</Link>
        </li>
      </>
    )
  }




  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>


              {userLogin ? <Login /> : <LogOut />}

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header