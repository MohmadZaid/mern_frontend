import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Logout = () => {
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