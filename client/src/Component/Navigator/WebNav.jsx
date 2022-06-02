import React from 'react'
import { info } from '../Assets/Details/info'

import { WebNavContainer, WebNavItems } from '../Styles/Nav.styled'
import {Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function WebNav() {
    const navigate = useNavigate()
    const user = useSelector((state)=> state.user.value)
    console.log(user)

  return (
    <WebNavContainer>
        <h3>{info.name}</h3>

        <WebNavItems>
            {
                info.nav_items.map((item, i)=>{
                    return(
                        <div key={i} className="items" onClick={()=>navigate(`${item.link}`)}>
                            {
                               user && item.id === 8 ? user.firstName : item.title
                            }
                        </div>
                    )
                })
            }
        </WebNavItems>
    </WebNavContainer>
  )
}

export default WebNav