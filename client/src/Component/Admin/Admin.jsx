import React from 'react'
import { AdminContainer } from '../Styles/Admin.styled'
import AdminCenter from './AdminCenter'
import AdminLeft from './AdminLeft'
import AdminRight from './AdminRight'

function Admin() {
  return (
    <AdminContainer>
        <AdminLeft />
        <AdminCenter />
        <AdminRight />
    </AdminContainer>
  )
}

export default Admin