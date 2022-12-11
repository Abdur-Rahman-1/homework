import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { Banner } from '../components/banner/Banner'
import { Logo } from '../components/logo/Logo'
import { Working } from '../components/working/Working'
import { One } from '../components/one/One'
import { Two } from '../components/two/Two'
import { Three } from '../components/three/Three'
import { Four } from '../components/four/Four'
import { Footer } from '../components/footer/Footer'



export const Features = () => {
  return (
    <>
    <Navbar/>   
    <Banner/>
    <Logo/>
    <Working/>
    <One/>
    <Two/>
    <Three/>
    <Four/>
    <Footer/>
 
    </>
  )
}
