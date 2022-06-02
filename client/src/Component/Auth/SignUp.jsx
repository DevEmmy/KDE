import React, { useRef } from 'react'
import { AuthButton, AuthContainer } from '../Styles/Auth.styled'
import axios from 'axios'

function SignUp({func}) {

    const fullNameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const signUp = async ()=>{
        axios.post('http://localhost:5555/auth/signup', {
            fullName: fullNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }).then(resp => {
            if(resp.status == 200){
                func(true)
            }
        })
        .catch(err=>console.log(err))
    }


  return (
    <AuthContainer>
        <h2>Sign Up</h2>

        <form action="">
            <input type="text" placeholder='First Name' ref={fullNameRef}/>
            <input type="email" placeholder='Email'  ref={emailRef}/>
            <input type="password" placeholder='Password' ref={passwordRef}/>
            <AuthButton onClick={()=> signUp()}> Sign Up </AuthButton>
        </form>
        <p>I already have an account, <span className="account_check" onClick={()=>func(true)}>Login.</span></p>
    </AuthContainer>
  )
}

export default SignUp