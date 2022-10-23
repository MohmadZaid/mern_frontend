import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'

const About = () => {
  const [spinner, setSpinner] = useState(true)
  const [userData, setUserData] = useState({})
  const getDataUser = async () => {
    const res = await fetch('/aboutserver', {
      method: "GET",
      headers: {
        "content-Type": "application/json"
      }
    });

    const json = await res.json()
    setUserData(json)
    setSpinner(false)
    console.log(json);
  }

  useEffect(() => {


    
    getDataUser()



  }, [])


  return (
    <>
      {spinner === true ? <Spinner /> : null}
      <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white"
                    style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar" className="img-fluid my-5" style={{ width: "80px" }} />
                    <h5>Marie Horwitz</h5>
                    <p>Web Designer</p>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{userData.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{userData.phone}</p>
                        </div>
                      </div>

                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Name</h6>
                          <p className="text-muted">{userData.name}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Address</h6>
                          <p className="text-muted">{userData.address}</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                        <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                        <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About