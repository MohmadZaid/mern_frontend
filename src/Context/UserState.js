import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const UserState = (props) => {

    const [userLogin, setUserLogin] = useState()

  return (
    <UserContext.Provider value={{userLogin,setUserLogin}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState