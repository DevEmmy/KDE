import React from 'react'
import { info } from '../Assets/Details/info'
import { FooterContainer } from '../Styles/LandingPage.styled'
import { useNavigate } from 'react-router-dom';


function Footer() {

    const navigate = useNavigate()

    return (
    <FooterContainer>
        <div className="footer_1">
            <h3>{info.name}</h3>
            <p>{info.footer_content_text}</p>
            <p className="copyright">{info.copyright}</p>
        </div>

        <div className="footer_2">
            <h3>Our Company</h3>
            <div className="footer_items">
                {info.nav_items.filter((item)=>item.title !== "Sign In/Up").map((item)=>{
                    return(
                        <div className="footer_item" key={item.id} onClick={()=>navigate(`${item.link}`)}>
                            
                            {item.title}
                            
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="footer_3">
            <h3>Categories</h3>
            <div className="footer_items">
                { info.categories.map((item)=>{
                    return(
                        <div className="footer_item" key={item.id} onClick={()=>navigate(`${item.link}`)}>
                            {/* <Link to={item.link}> */}
                            {item.title}
                            {/* </Link> */}
                        </div>
                    )
                })}
            </div>
        </div>
        </FooterContainer>
  )
}

export default Footer