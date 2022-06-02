import React, { useState } from 'react'
import { info } from '../Assets/Details/info'
import { MainAuthContainer } from '../Styles/Auth.styled'
import Login from './Login'
import SignUp from './SignUp'

function MainAuth() {

    const [account, setAccount] = useState(true)

  return (
    <MainAuthContainer>
      <div className="img">
        <img src={info.banner_img} alt="" />
      </div>

      <div>
        { account ? <Login func={setAccount}/> : <SignUp func={setAccount}/>}
      </div>
    </MainAuthContainer>
    
  )
}

export default MainAuth