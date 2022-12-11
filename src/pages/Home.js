import React from 'react'
import {Navbar}   from '../components/navbar/Navbar'
import { Banner } from '../components/banner/Banner'
import { Work } from '../components/work/Work'
import { Proj } from '../components/proj/Proj'
import { Client } from '../components/client/Client'
import { Impormation } from '../components/impormation/Impormation'
import { Blog } from '../components/blog/Blog'
import { Footer } from '../components/footer/Footer'



export const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Work/>
    <Proj/>
    
    <Client/>
    <Impormation />
    <Blog/>
    <Footer/>
   
    
    
    </>
  )
}
