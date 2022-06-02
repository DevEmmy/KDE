import React from 'react'
import { AdminLeftContainer } from '../Styles/Admin.styled'
import { items } from './navItems'

function AdminLeft() {
  return (
    <AdminLeftContainer>

        <div className="profile_container">
            <img src="https://th.bing.com/th/id/R.b2ee5091106dc5646ba94647cd77c7b0?rik=ty1Wak976LLaNA&riu=http%3a%2f%2fwww.nwcaonline.com%2fwp-content%2fuploads%2f2016%2f07%2favatar_administrator2.png&ehk=fsTf5nE60n3Kkgd3Unty7PCef3F2tph3TUTYjPtzdUs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
            <h3>Admin</h3>
        </div>

        <div className="nav_items">
            {
                items.map((item, i)=>{
                    return(
                        <div key={i} className="item">
                            <h5>{item.title}</h5>
                        </div>
                    )
                })
            }
        </div>
        
    </AdminLeftContainer>
  )
}

export default AdminLeft