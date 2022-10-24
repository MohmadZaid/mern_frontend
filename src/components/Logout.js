import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserState'


const Logout = () => {

    const {setUserLogin} = useContext(UserContext)

    const navigate = useNavigate()

    const logoutUser = async () => {

        const res = await fetch('logoutserver', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json"
            }
        });

        const json = await res.json()
        console.log(json);
        setUserLogin(false)
        navigate('/login',)

    }

    useEffect(() => {
        logoutUser()

        // eslint-disable-next-line
    }, [])





    return (
        <div>Logout</div>
    )
}

export default Logout