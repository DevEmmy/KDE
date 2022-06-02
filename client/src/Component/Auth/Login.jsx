import React, { useRef } from 'react'
import { AuthButton, AuthContainer } from '../Styles/Auth.styled'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/userSlice'

function Login({func}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const getProfile = async ()=>{
        await axios.get('https://kde-api.herokuapp.com/auth/profile', { headers: {
          'content-type' : "application/json",
          'authorization' : `Bearer ${localStorage.getItem('token')}`
        }
        })
        .then((resp)=>{

        //   setProfile(resp.data);
        dispatch(addUser(resp.data))
        console.log(resp.data)
        //   console.log(resp.data)
      }
        )
        .catch((err)=>console.log(err))
      }

    const logIn = async ()=>{
        axios.post('https://kde-api.herokuapp.com/auth/signin', {
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
        .then(resp => {
            console.log(resp.data)
            localStorage.setItem("token", resp.data.token)
            const token = localStorage.getItem('token')
            if(token){
                navigate('/')
                getProfile()
                window.location.reload();
            }
        })
        .catch(err => console.log("An error occured"))
    }

  return (
    <AuthContainer>
        <h2>Login</h2>

        <form action="">
        <input type="email" placeholder='Email'  ref={emailRef}/>
            <input type="password" placeholder='Password' ref={passwordRef}/>

            <AuthButton onClick={()=> logIn()}> Login </AuthButton>
        </form>
        <p>I don't have an account yet, <span className="account_check" onClick={()=>func(false)}>Create an account.</span></p>
    </AuthContainer>
  )
}

export default Login