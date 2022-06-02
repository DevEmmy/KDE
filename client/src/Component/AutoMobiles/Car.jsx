import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../LandingPage/Footer'
import Nav from '../Navigator/Nav'
import { BannerContainer } from '../Styles/LandingPage.styled'
import { RealEstatePageContainer } from '../Styles/RealEstate.styled'

function Car() {
    const [listing, setListing ] = useState()
    const { title } = useParams()
    const [cat, setCat] = useState()

    const fetchListing = async ()=>{
        await axios.get(`http://localhost:5555/listing/${title}`)
        .then(resp =>setListing(resp.data))
        .catch(err=> console.log(err))
      }
      
      useEffect(()=> {fetchListing()}, [])
  return (
    <RealEstatePageContainer>
        <Nav />

        <BannerContainer>
          <img src={listing?.displayImage} alt="" />
          <div className='dark_bg' />
          <div className="text_content">
              <h1>{listing?.title}</h1>
              <p>{listing?.desc}</p>
          </div>
      </BannerContainer>

        <Footer />
    </RealEstatePageContainer>
  )
}

export default Car