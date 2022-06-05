import React from 'react'
import { LandingPageContainer } from '../Styles/LandingPage.styled'
import Nav from '../Navigator/Nav'
import Footer from './Footer'
import { RealEstateContentContainer } from '../Styles/RealEstate.styled';
import { useNavigate } from 'react-router-dom';

function Saved() {
  let user = localStorage.getItem('user');
  user = JSON.parse(user)
  const navigate = useNavigate()

  const truncate =  (str)=> {
    return str.length > 10 ? str.substring(0, 100) + "..." : str;
  }

  return (
    <LandingPageContainer >
        <Nav  />
            <h2>Saved Listings</h2>
            <RealEstateContentContainer>
              <div className="main_listing">
                    {
                      user.savedListing.map((list)=>{
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
                      })
                    }
              </div>
              
            </RealEstateContentContainer>
            
        <Footer />
    </LandingPageContainer>
  )
}

export default Saved