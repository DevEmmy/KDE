import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../Navigator/Nav'
import { LandingPageContainer, LatestContainer } from '../Styles/LandingPage.styled'
import Footer from './Footer'

function Latest() {
    const [listing, setListing] = useState()
    const navigate = useNavigate()

    const fetchListing = async ()=>{
        await axios.get('https://kde-api.herokuapp.com/listing')
        .then(resp =>setListing(resp.data))
        .catch(err=> console.log(err))
      }

      const truncate =  (str)=> {
        return str.length > 10 ? str.substring(0, 100) + "..." : str;
      }

    useEffect(()=>{
        fetchListing()
    }, [])
  return (
    <LandingPageContainer>
        <Nav />
            <LatestContainer>
                <h2>Latest</h2>

                <div className="main_listing">
                    {listing?.map((list)=>{
                  return(
                    // <Link to={`/real-estate/${list.id}`}>
                      <div className='list' key={list._id} onClick={()=> navigate(`/listing/${list.title}`)}>
                        <img src={list.displayImage} alt="" />
                        <div className="list_text">
                          <h3>${list.price}</h3>
                          {/* <h6>Category : { list.attributes.real_estate_subcategory.data.attributes.category}</h6> */}
                          <p>
                          {truncate(list.desc)}
                          </p>
                        </div>
                      </div>
                    // </Link>
                  )
                })}
                </div>
                


            </LatestContainer>
        <Footer />
    </LandingPageContainer>
  )
}

export default Latest