import React from 'react'
import { AdminCenterContainer, ListContainer } from '../Styles/Admin.styled'
import ListingCompo from './ListingCompo'


function AdminCenter() {
  return (
    <AdminCenterContainer>
        <div className="welcome">
            Admin, Welcome to you dashboard!
        </div>

    <div className="no_of_items">
        <div className="number_of_users">
            Signed Up Users: 50
        </div>

        <div className="number_of_users">
            Listings: 20
        </div>
    </div>

    <ListingCompo />
        

    </AdminCenterContainer>

  )
}

export default AdminCenter