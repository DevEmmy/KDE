import React from 'react'
import { useNavigate } from 'react-router-dom'
import blog from '../Assets/Details/blog'
import { info } from '../Assets/Details/info'
import Footer from '../LandingPage/Footer'
import Nav from '../Navigator/Nav'
import WebNav from '../Navigator/WebNav'
import { BlogContainer, BlogsContainer, MainBlogsContainer } from '../Styles/Blog.styled'
import { FooterContainer } from '../Styles/LandingPage.styled'

function Blogs() {
    const navigate = useNavigate()

  return (
      <BlogsContainer>
         <Nav/>

        <BlogContainer>
            <h2>Blogs</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eius totam nisi doloribus sed quos, eos fuga exercitationem sint nemo.</p>
        </BlogContainer>

        <MainBlogsContainer>
            {
                blog.map((blog,i)=>{
                    return(
                        <div key={i} style={{backgroundImage: `url(${blog.img})`}}>
                            <h3>{blog.title}</h3>
                            {/* <img src={blog.img} alt="" /> */}
                            <p>{blog.content}</p>

                            <div className="read_more">
                                Read More...
                            </div>
                        </div>
                    )
                })
            }
        </MainBlogsContainer>


       <Footer />
      </BlogsContainer>
    
  )
}

export default Blogs