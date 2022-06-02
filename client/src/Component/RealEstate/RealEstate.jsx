import { SaveAsIcon, SaveIcon } from '@heroicons/react/solid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { info } from '../Assets/Details/info'
import Footer from '../LandingPage/Footer'
import Nav from '../Navigator/Nav'
import { BannerContainer, BookSection, LandingPageContainer } from '../Styles/LandingPage.styled'
import { ListingDetails, RealEstatePageContainer } from '../Styles/RealEstate.styled'

function RealEstate() {

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
        <Nav/>

        <BannerContainer>
          <img src={listing?.displayImage} alt="" />
          <div className='dark_bg' />
          <div className="text_content">
              <h1>{listing?.title}</h1>
              <p>{listing?.desc}</p>
          </div>
      </BannerContainer>

      <ListingDetails>
            <div className="save_list">
                <SaveAsIcon width={18}/> save
            </div>

            <div className="details_book_container">
                 <div className="details">
                    <h3>Description</h3>
                <p>
                    {listing?.desc}
                </p>

                <div className="images">
                    <h3>Images</h3>
                </div>

                <h3>Features</h3>
                <ul>
                        {
                        listing?.features?.map((item, i)=>{
                            return(
                                <li key={i}>
                                    {item.content}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <BookSection>
            <h3>Place an Order</h3>
            <form action="">
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Full Name' />
                <input type="text" defaultValue={`Good Day, King David Elites, I want to Book for the property - ${listing?.title} : ${listing?._id}`} placeholder='Message' />
                <div className="submit_message">Place Order</div>
            </form>
        </BookSection>
            </div>

           
      </ListingDetails>
          
        

        <Footer/>
    </RealEstatePageContainer>
  )
}

export default RealEstate