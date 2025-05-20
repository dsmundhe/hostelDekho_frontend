import React from 'react'
import Footer from './Footer'
import HomeContainer from './HomeContainer'
import HomeGallery from './HomeGallery'
import HomePhotos from './HomePhotos'
import Features from './Features'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
         <HomeContainer/>
         <Features/>
         <HomeGallery/>
         <HomePhotos/>
         <Testimonials />
         <Footer/>
    </div>
  )
}

export default Home
