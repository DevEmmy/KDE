import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { MenuAlt3Icon } from '@heroicons/react/solid'
import WebNav from './WebNav'
import MobileNav from './MobileNav'

function Nav() {
    let [width, setWidth] = useState(window.innerWidth)

    const [nav, setNav] = useState(false)

    const setSize = ()=>{
        setWidth(window.innerWidth)
        console.log(width)
    }
    useEffect(() => {
     window.addEventListener('resize', setSize)
     return ()=>{ 
         console.log(width)
        window.removeEventListener('resize', setSize)
     }
    
    }, [width]);
  return (
    <>
        { width >= 500 ?  <WebNav /> : <MenuAlt3Icon width="30px" onClick={()=>setNav(!nav)}/>}

        {nav ?  <MobileNav pro = {setNav } left='0px'/> : <MobileNav pro = {setNav } left='-140%'/>}
    </>
  )
}

export default Nav