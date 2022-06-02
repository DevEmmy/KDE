import React from 'react'
import {info}  from "../Assets/Details/info";
import { XIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { MobileNavContainer } from '../Styles/Nav.styled';

function MobileNav({pro, left}) {
  return (
      <MobileNavContainer>
          <div className='head-nav' style={{marginLeft:left}}>
            <div className="nav-head-container">
                <h3>{info.name}</h3>
                <XIcon width='36px' onClick={()=> pro(false)}/>
            </div>
            <div className="nav-menu">
                { info.nav_items.map((item)=>{

                    return(
                        <Link to={item.link} key={item.id}>
                            <li>{item.title}</li>
                        </Link>
                        
                    )
                        
                })}
            </div>
        </div>
      </MobileNavContainer>
    
  )
}

export default MobileNav