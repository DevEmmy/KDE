import React from 'react'
import { LandingPageContainer } from '../Styles/LandingPage.styled'
import Nav from '../Navigator/Nav'
import Footer from './Footer'

function Saved() {
  return (
    <LandingPageContainer >
        <Nav  />
            <h2>Saved Listings</h2>
        <Footer />
    </LandingPageContainer>
  )
}

export default Saved