import React, { useEffect, useState } from 'react'
import { info } from '../Assets/Details/info'
import WebNav from '../Navigator/WebNav'
import { BannerContainer, FooterContainer, NewsLetterContainer } from '../Styles/LandingPage.styled'
import { RealEstateContentContainer, RealEstatePageContainer } from '../Styles/RealEstate.styled'
import { Link } from 'react-router-dom'
import { sub } from '../Assets/Details/subcategory'
import Nav from '../Navigator/Nav'
import Footer from '../LandingPage/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function MainRealEstate() {
  const [listing, setListing] = useState()
  const [filter, setFilter] = useState('All')
  const [cat, setCat] = useState()
  const navigate = useNavigate()

  const truncate =  (str)=> {
    return str.length > 10 ? str.substring(0, 100) + "..." : str;
  }

  const fetchCategory = async ()=>{
    await axios.get('https://kde-api.herokuapp.com/category//real-estate')
    .then(resp=> setCat(resp.data[0]))
    .catch(err=> console.log(err))
  }

  const fetchListing = async ()=>{
    await axios.get('https://kde-api.herokuapp.com/listing/category/62989c57f207d89226162e4b')
    .then(resp =>setListing(resp.data))
    .catch(err=> console.log(err))
  }

  useEffect(()=>{
     fetchCategory()
     fetchListing()
    }, [])

  return (
    <RealEstatePageContainer>
       <Nav />

      <BannerContainer>
          <img src={cat?.displayImage} alt="" />
          <div className='dark_bg' />
          <div className="text_content">
              <h1>Real Estate</h1>
              <p>Browse through a carefully curated catalogue of luxurious real estate properties in Africa.</p>
          </div>
      </BannerContainer>

        <RealEstateContentContainer>
        <div className="real_estate_filter">
            {
              sub.realEstate?.map((cat)=>{
                return(
                  <div className="filter" onClick={()=>setFilter(`${cat.title}`)} key={cat.id}>
                      {cat.title}
                  </div>
                )
              })
            }
          </div>

          <div className="real_estate_main">
            <h2>Real Estate</h2>
            <div className="main_listing">
              { filter === "All" ?
                listing?.map((list)=>{
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

                : 

                listing?.filter((list)=> list.subcategory === filter).map((list)=>{
                  return(
                    // <Link to={`/real-estate/${list.id}`}>
                      <div className='list' key={list._id}>
                        <img src={list.
                        displayImage} alt="" />
                        <div className="list_text">
                          <h3>${}</h3>
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
          </div>
        </RealEstateContentContainer>

        <NewsLetterContainer>

            <div className="news_text_container">
                <h1>Weekly News Letter</h1>
                <p>{info.newsLetter_intro_text}</p>
            </div>
            


            <form className="newsLetter_form">
                <input type="email" name="email" placeholder='Email'/>
                <input type="button" value="SUBSCRIBE" />
            </form>
        </NewsLetterContainer>

        <Footer />
    </RealEstatePageContainer>
  )
}

export default MainRealEstate