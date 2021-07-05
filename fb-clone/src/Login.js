import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'

function Login() {
    const signIn = () => {

    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img
                    src='https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg'
                    alt=''
                />
                <img
                    src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
                    alt=''
                />
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
