import React, { useEffect, useState } from 'react'
import { info } from '../Assets/Details/info'
import WebNav from '../Navigator/WebNav'
import { BannerContainer, FooterContainer, LandingPageContainer, NewsLetterContainer } from '../Styles/LandingPage.styled'
import { CategoriesContainer } from '../Styles/Nav.styled'
import {Link, useNavigate } from 'react-router-dom'
import MobileNav from '../Navigator/MobileNav'
import { MenuAlt3Icon } from '@heroicons/react/solid'
import Nav from '../Navigator/Nav'
import Footer from './Footer'
import axios from 'axios'


function MainLandingPage() {

    const navigate = useNavigate()
    const [media,setMedia] = useState()
    const [categories, setCategories] = useState([])

    const fetchSiteMedia = async()=>{
        await axios.get('https://kde-api.herokuapp.com/site-media')
        .then(resp=> setMedia(resp.data[0]))
        .catch(err => console.log(err))
    }

    const fetchCategories = async()=>{
        await axios.get('https://kde-api.herokuapp.com/category')
        .then(resp => setCategories(resp.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        fetchSiteMedia()
        fetchCategories()
    }, [])
    
    
    
  return (
    <LandingPageContainer>
        <Nav />
       

        <BannerContainer>
            {!media?.video ? <img src={media?.image} alt="" /> : <video src={media?.video}></video>}
            
            <div className='dark_bg' />
            <div className="text_content">
                <h1>{info.banner_text}</h1>
                <p>{info.banner_sub_text}</p>
            </div>
        </BannerContainer>

        <CategoriesContainer>
            <h3>Categories</h3>

            <div className="categories_section">
            {
                categories.map((item, i)=>{
                return(
                        <div className='category' style={{background: `url(${item?.displayImage})`}} key={i}  onClick={()=>navigate(`${item?.link}`)}>
                            <h3>{item?.title}</h3>
                        </div>
                )
            })
            }
            </div>
        </CategoriesContainer>

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

    </LandingPageContainer>
  )
}

export default MainLandingPage