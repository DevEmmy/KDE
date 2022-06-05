import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { AdminContainer, ListingCompoContainer } from '../Styles/Admin.styled'
import List from './List'
import AdminLeft from "./AdminLeft"
import AddListing from './AddListing'
import { FunctionsApi } from '../../store/FunctionsApi'


function ListingCompo() {

  const [allListings, setAllListings ] = useState()
  const {api} = useContext(FunctionsApi)

  const getListings = async ()=>{
    await axios.get(`${api}/listing/`)
    .then((resp) => setAllListings(resp.data))
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    getListings()
  }, [])

  const [ addList, setAddList ] = useState(false)
  return (
    <AdminContainer>
      <AdminLeft />

      <ListingCompoContainer>
        <h2>Listing</h2>
            <div className="top_sections" onClick={()=> setAddList(!addList)}>
              + Add Listing
            </div>

            { addList && <AddListing />}

            <div className="main_listings">
              {
                allListings?.map((listing, i)=>{
                  return(
                    <List key={i} list={listing} />
                  )
                })
              }
            </div>
          </ListingCompoContainer> 
  
    </AdminContainer>
  )  
}

export default ListingCompo