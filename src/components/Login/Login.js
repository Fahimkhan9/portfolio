import React from 'react'
import auth, { provider } from './firebase'

function Login() {
    const login =() => {
        auth.signInWithPopup(provider)
        .then(res => console.log(res))
        .catch(err => alert(err))
    

    }
    return (
        <div>
            <button className="btn btn-primary" onClick={login}>Login</button>
        </div>
    )
}

export default Login
