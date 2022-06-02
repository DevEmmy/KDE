import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { info } from '../Assets/Details/info'
import Footer from '../LandingPage/Footer'
import Nav from '../Navigator/Nav'
import { AutomobilesContainer, CarsContainer } from '../Styles/Automobiles.styled'
import { BannerContainer, FooterContainer, NewsLetterContainer } from '../Styles/LandingPage.styled'
import { RealEstateContentContainer } from '../Styles/RealEstate.styled'

function Automobiles() {
  const navigate = useNavigate()

    const [listing, setListing] = useState()
  const [filter, setFilter] = useState('All')
  const [cat, setCat] = useState()

  const truncate =  (str)=> {
    return str.length > 10 ? str.substring(0, 100) + "..." : str;
  }

  const fetchCategory = async ()=>{
    await axios.get('https://kde-api.herokuapp.com/category/cars')
    .then(resp=> setCat(resp.data[0]))
    .catch(err=> console.log(err))
  }

  const fetchListing = async ()=>{
    await axios.get('https://kde-api.herokuapp.com/listing/category/62895e99f41d6461d48743ba')
    .then(resp =>setListing(resp.data))
    .catch(err=> console.log(err))
  }

  useEffect(()=>{
     fetchCategory()
     fetchListing()
    }, [])

  return (
    <AutomobilesContainer>
        <Nav />
        <BannerContainer>
          <img src={cat?.displayImage} alt="" />
          <div className='dark_bg' />
          <div className="text_content">
              <h1>Cars</h1>
              <p>Mobility equates nobility so we offer you choice luxury cars from the most reputable dealers in Africa </p>
            </div>
      </BannerContainer>

      <RealEstateContentContainer>
          <div className="real_estate_main">
              <h2>Cars</h2>
              <div className="main_listing">
           {
              listing?.map((list)=>{
                return(
                  
                    <div className='list' key={list._id} onClick={()=> navigate(`/listing/${list.title}`)}>
                      <img src={list.displayImage} alt="" />
                      <div className="list_text">
                        <h3>${list.price}</h3>
                  
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

    </AutomobilesContainer>
  )
}

export default Automobiles